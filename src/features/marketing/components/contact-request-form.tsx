'use client';

import { useState } from 'react';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';

type ContactRequestFormProps = {
  locale: 'vi' | 'en';
  instagramUrl: string;
  facebookUrl: string;
  formLabels: {
    fullName: string;
    phone: string;
    occasion: string;
    message: string;
    submit: string;
  };
  formPlaceholders: {
    fullName: string;
    phone: string;
    message: string;
  };
  occasionOptions: string[];
};

type FormState = {
  fullName: string;
  phone: string;
  occasion: string;
  message: string;
};

export function ContactRequestForm({
  locale,
  instagramUrl,
  facebookUrl,
  formLabels,
  formPlaceholders,
  occasionOptions,
}: ContactRequestFormProps) {
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    phone: '',
    occasion: occasionOptions[0] ?? '',
    message: '',
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const submitDescription =
    locale === 'vi'
      ? 'Tạo sẵn nội dung tin nhắn để gửi cho shop qua Instagram hoặc Facebook.'
      : 'Create a ready-to-send message for Instagram or Facebook.';
  const previewTitle = locale === 'vi' ? 'Tin nhắn đã tạo' : 'Generated message';
  const copyHint =
    locale === 'vi'
      ? 'Tin nhắn sẽ được copy sẵn, sau đó bạn chọn kênh để mở và gửi.'
      : 'The message will be copied first, then you can open a channel and send it.';
  const copiedLabel =
    locale === 'vi' ? 'Đã copy tin nhắn vào clipboard.' : 'Message copied to clipboard.';
  const openInstagramLabel =
    locale === 'vi' ? 'Mở Instagram để gửi' : 'Open Instagram';
  const openFacebookLabel =
    locale === 'vi' ? 'Mở Facebook để gửi' : 'Open Facebook';
  const requiredAlert =
    locale === 'vi'
      ? 'Vui lòng nhập họ tên và số điện thoại trước khi gửi yêu cầu.'
      : 'Please enter your name and phone number before sending the request.';

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  }

  function buildMessage() {
    const lines =
      locale === 'vi'
        ? [
            'Xin chào Bloom Bliss Florist,',
            '',
            'Mình muốn gửi yêu cầu đặt hoa với thông tin sau:',
            `- Họ và tên: ${formState.fullName}`,
            `- Số điện thoại: ${formState.phone}`,
            `- Dịp tặng: ${formState.occasion}`,
            `- Lời nhắn / Yêu cầu riêng: ${formState.message || 'Chưa có thêm ghi chú'}`,
          ]
        : [
            'Hello Bloom Bliss Florist,',
            '',
            'I would like to place a flower order with the following details:',
            `- Full name: ${formState.fullName}`,
            `- Phone number: ${formState.phone}`,
            `- Occasion: ${formState.occasion}`,
            `- Message / Special request: ${formState.message || 'No additional notes yet'}`,
          ];

    return lines.join('\n');
  }

  async function prepareMessage() {
    if (!formState.fullName.trim() || !formState.phone.trim()) {
      window.alert(requiredAlert);
      return '';
    }

    const nextMessage = buildMessage();
    setGeneratedMessage(nextMessage);

    try {
      await navigator.clipboard.writeText(nextMessage);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }

    return nextMessage;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await prepareMessage();
  }

  async function openChannel(url: string) {
    const nextMessage = generatedMessage || (await prepareMessage());

    if (!nextMessage) {
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="full-name" className="text-xs font-bold uppercase text-slate-500">
            {formLabels.fullName}
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            value={formState.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            className="w-full rounded-2xl bg-slate-50 px-5 py-4 outline-none ring-0 transition focus:ring-2 focus:ring-rose-500"
            placeholder={formPlaceholders.fullName}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase text-slate-500">
            {formLabels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            className="w-full rounded-2xl bg-slate-50 px-5 py-4 outline-none transition focus:ring-2 focus:ring-rose-500"
            placeholder={formPlaceholders.phone}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="occasion" className="text-xs font-bold uppercase text-slate-500">
          {formLabels.occasion}
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formState.occasion}
          onChange={(event) => updateField('occasion', event.target.value)}
          className="w-full appearance-none rounded-2xl bg-slate-50 px-5 py-4 outline-none transition focus:ring-2 focus:ring-rose-500"
        >
          {occasionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase text-slate-500">
          {formLabels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="w-full resize-none rounded-2xl bg-slate-50 px-5 py-4 outline-none transition focus:ring-2 focus:ring-rose-500"
          placeholder={formPlaceholders.message}
        />
      </div>

      <div className="rounded-3xl border border-rose-100 bg-rose-50/70 p-5 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">{submitDescription}</p>
        <p className="mt-2">{copyHint}</p>
        {isCopied ? <p className="mt-3 font-semibold text-rose-600">{copiedLabel}</p> : null}
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 py-5 text-lg font-bold text-white shadow-xl shadow-rose-200 transition-all hover:bg-rose-600">
        {formLabels.submit}
        <ArrowRight size={20} />
      </button>

      {generatedMessage ? (
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              {previewTitle}
            </p>
            <textarea
              readOnly
              value={generatedMessage}
              rows={8}
              className="mt-3 w-full resize-none rounded-2xl bg-white px-4 py-4 text-sm leading-relaxed text-slate-700 outline-none"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <button
              type="button"
              onClick={() => void openChannel(instagramUrl)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-5 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <Instagram size={18} />
              {openInstagramLabel}
            </button>
            <button
              type="button"
              onClick={() => void openChannel(facebookUrl)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#1877F2] px-5 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <Facebook size={18} />
              {openFacebookLabel}
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
