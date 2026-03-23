type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
};

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new ApiError(data?.message ?? 'Request failed.', response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const apiClient = {
  get: <T>(url: string, options?: RequestOptions) => request<T>(url, { ...options, method: 'GET' }),
  post: <T>(url: string, body?: unknown, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'POST', body }),
  patch: <T>(url: string, body?: unknown, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'PATCH', body }),
  delete: <T>(url: string, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'DELETE' })
};

