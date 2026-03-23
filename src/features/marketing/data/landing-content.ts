import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Send,
  ShoppingBag
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const locales = ['vi', 'en'] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  customText?: string;
  className: string;
};

export type Product = {
  name: string;
  price: string;
  category: string;
  tag?: string;
  emoji: string;
  href: string;
};

export type ContactPoint = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type HeaderAction = {
  label: string;
  icon: LucideIcon;
  badge?: string;
};

export type MarketingDictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  brandName: string;
  navItems: NavItem[];
  languageLabel: string;
  searchLabel: string;
  cartLabel: string;
  menuLabel: string;
  languageNames: Record<Locale, string>;
  headerActions: HeaderAction[];
  floatingSocialLinks: SocialLink[];
  announcement: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroPrimaryCta: {
    label: string;
    href: string;
    icon: LucideIcon;
  };
  heroSecondaryCta: {
    label: string;
    href: string;
    icon: LucideIcon;
  };
  heroBadge: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
  heroImage: {
    src: string;
    alt: string;
  };
  productsTitle: string;
  productsDescription: string;
  productCategories: string[];
  featuredProducts: Product[];
  moreProductsLabel: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutStats: Array<{
    title: string;
    description: string;
    tone: 'rose' | 'slate' | 'emerald';
  }>;
  contactTitle: string;
  contactDescription: string;
  contactPoints: ContactPoint[];
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
  footerDescription: string;
  footerLinksTitle: string;
  footerLinks: NavItem[];
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterSubmitLabel: string;
  footerYearLabel: string;
  structuredDataName: string;
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getHomeHref(locale: Locale): '/vi' | '/en' {
  return locale === 'vi' ? '/vi' : '/en';
}

const commonSocialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    className:
      'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white'
  },
  {
    label: 'Zalo',
    href: 'https://zalo.me',
    customText: 'Z',
    className: 'bg-[#0068FF] text-white'
  },
  {
    label: 'Messenger',
    href: 'https://m.me',
    icon: MessageCircle,
    className: 'bg-gradient-to-b from-[#00c6ff] to-[#0072ff] text-white'
  }
];

const commonHeroImage = {
  src: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80'
};

const dictionaries: Record<Locale, MarketingDictionary> = {
  vi: {
    locale: 'vi',
    meta: {
      title: 'Bloom Flower Shop',
      description:
        'Bloom là landing page tiệm hoa hiện đại với nội dung tiếng Việt, tối ưu SEO, tải nhanh và ưu tiên hiển thị server-side.'
    },
    brandName: 'Bloom',
    navItems: [
      { label: 'Trang chủ', href: '#' },
      { label: 'Sản phẩm', href: '#san-pham' },
      { label: 'Về chúng tôi', href: '#gioi-thieu' },
      { label: 'Liên hệ', href: '#lien-he' }
    ],
    languageLabel: 'Ngôn ngữ',
    searchLabel: 'Tìm kiếm',
    cartLabel: 'Giỏ hàng',
    menuLabel: 'Mở menu',
    languageNames: {
      vi: 'VI',
      en: 'EN'
    },
    headerActions: [
      { label: 'Tìm kiếm', icon: Search },
      { label: 'Giỏ hàng', icon: ShoppingBag, badge: '2' }
    ],
    floatingSocialLinks: commonSocialLinks,
    announcement: 'Làm đẹp không gian của bạn',
    heroTitle: 'Trao gửi Yêu thương qua từng đóa hoa',
    heroHighlight: 'Yêu thương',
    heroDescription:
      'Bloom cung cấp những mẫu hoa tươi nghệ thuật được thiết kế riêng cho mọi dịp đặc biệt. Giao hoa tận nơi trong 2 giờ.',
    heroPrimaryCta: {
      label: 'Xem bộ sưu tập',
      href: '#san-pham',
      icon: ArrowRight
    },
    heroSecondaryCta: {
      label: 'Liên hệ ngay',
      href: 'tel:19006789',
      icon: Phone
    },
    heroBadge: {
      title: 'Giao hàng nhanh',
      description: 'Chỉ trong 120 phút',
      icon: Clock
    },
    heroImage: {
      ...commonHeroImage,
      alt: 'Bó hoa tươi cao cấp của Bloom'
    },
    productsTitle: 'Mẫu hoa nổi bật',
    productsDescription:
      'Được chọn lọc và thiết kế bởi các nghệ nhân của chúng tôi.',
    productCategories: [
      'Tất cả',
      'Hoa cưới',
      'Hoa sinh nhật',
      'Khai trương',
      'Chia buồn'
    ],
    featuredProducts: [
      {
        name: 'Bó Hồng Ecuador Đỏ Thắm',
        price: '1.250.000₫',
        category: 'Hoa tình yêu',
        tag: 'Bán chạy',
        emoji: '🌹',
        href: '#lien-he'
      },
      {
        name: 'Hộp Hoa Tulip Trắng Tinh Khôi',
        price: '950.000₫',
        category: 'Hoa cao cấp',
        tag: 'Mới',
        emoji: '🌷',
        href: '#lien-he'
      },
      {
        name: 'Giỏ Hoa Hướng Dương Rực Rỡ',
        price: '680.000₫',
        category: 'Hoa chúc mừng',
        emoji: '🌻',
        href: '#lien-he'
      },
      {
        name: 'Lẵng Lan Hồ Điệp Sang Trọng',
        price: '2.500.000₫',
        category: 'Khai trương',
        tag: 'Premium',
        emoji: '🪷',
        href: '#lien-he'
      },
      {
        name: 'Bó Cẩm Tú Cầu Xanh Mướt',
        price: '450.000₫',
        category: 'Hoa lẻ',
        emoji: '💠',
        href: '#lien-he'
      },
      {
        name: 'Hộp Hoa Mix Tone Pastel',
        price: '1.100.000₫',
        category: 'Hoa nghệ thuật',
        tag: 'Yêu thích',
        emoji: '🌸',
        href: '#lien-he'
      }
    ],
    moreProductsLabel: 'Xem thêm 200+ mẫu hoa khác',
    aboutEyebrow: 'Về thương hiệu',
    aboutTitle: 'Về Bloom',
    aboutDescription:
      'Bloom là tiệm hoa theo phong cách đương đại, tập trung vào cảm xúc, tốc độ giao hàng và trải nghiệm đặt hoa tinh gọn cho khách hàng tại TP. HCM.',
    aboutStats: [
      {
        title: '2 giờ',
        description: 'Giao hoa nhanh nội thành TP. HCM.',
        tone: 'rose'
      },
      {
        title: 'Thiết kế riêng',
        description: 'Cá nhân hóa theo dịp tặng và ngân sách.',
        tone: 'slate'
      },
      {
        title: 'Hỗ trợ 24/7',
        description: 'Tư vấn nhanh qua hotline, Zalo và Messenger.',
        tone: 'emerald'
      }
    ],
    contactTitle: 'Đặt hoa theo yêu cầu',
    contactDescription:
      'Bạn muốn một thiết kế riêng biệt? Hãy để lại lời nhắn, chúng tôi sẽ tư vấn và thiết kế mẫu hoa phù hợp nhất với ý tưởng của bạn.',
    contactPoints: [
      {
        label: 'Hotline hỗ trợ',
        value: '1900 6789',
        icon: Phone
      },
      {
        label: 'Địa chỉ cửa hàng',
        value: '123 Đường Hoa Hồng, Quận 1, TP. HCM',
        icon: MapPin
      },
      {
        label: 'Tư vấn Zalo/Messenger',
        value: 'Chat trực tiếp 24/7',
        icon: MessageCircle
      }
    ],
    formLabels: {
      fullName: 'Họ và tên',
      phone: 'Số điện thoại',
      occasion: 'Dịp tặng hoa',
      message: 'Lời nhắn / Yêu cầu riêng',
      submit: 'Gửi yêu cầu đặt hoa'
    },
    formPlaceholders: {
      fullName: 'Nguyễn Văn A',
      phone: '090 123 xxxx',
      message: 'Mô tả mẫu hoa hoặc lời nhắn bạn muốn gửi gắm...'
    },
    occasionOptions: [
      'Sinh nhật',
      'Kỷ niệm ngày cưới',
      'Khai trương',
      'Khác...'
    ],
    footerDescription:
      'Chúng tôi tin rằng mỗi đóa hoa đều mang một câu chuyện riêng. Sứ mệnh của Bloom là giúp bạn kể câu chuyện đó một cách hoàn mỹ nhất.',
    footerLinksTitle: 'Liên kết nhanh',
    footerLinks: [
      { label: 'Về chúng tôi', href: '#gioi-thieu' },
      { label: 'Bộ sưu tập mẫu', href: '#san-pham' },
      { label: 'Chính sách giao hàng', href: '#lien-he' },
      { label: 'Điều khoản dịch vụ', href: '#lien-he' }
    ],
    newsletterTitle: 'Đăng ký nhận ưu đãi',
    newsletterDescription: 'Nhận ngay voucher 10% cho đơn hàng đầu tiên.',
    newsletterPlaceholder: 'Email của bạn',
    newsletterSubmitLabel: 'Đăng ký',
    footerYearLabel: '© 2024 Bloom Flower Shop. Designed for Elegance.',
    structuredDataName: 'Bloom Flower Shop',
  },
  en: {
    locale: 'en',
    meta: {
      title: 'Bloom Flower Shop',
      description:
        'Bloom is a modern florist landing page with English content, strong SEO defaults, fast loading, and server-first rendering.'
    },
    brandName: 'Bloom',
    navItems: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#san-pham' },
      { label: 'About us', href: '#gioi-thieu' },
      { label: 'Contact', href: '#lien-he' }
    ],
    languageLabel: 'Language',
    searchLabel: 'Search',
    cartLabel: 'Cart',
    menuLabel: 'Open menu',
    languageNames: {
      vi: 'VI',
      en: 'EN'
    },
    headerActions: [
      { label: 'Search', icon: Search },
      { label: 'Cart', icon: ShoppingBag, badge: '2' }
    ],
    floatingSocialLinks: commonSocialLinks,
    announcement: 'Bring beauty to your space',
    heroTitle: 'Send Love through every bouquet',
    heroHighlight: 'Love',
    heroDescription:
      'Bloom creates artistic fresh flower arrangements tailored for every special occasion, with same-day delivery in just 2 hours.',
    heroPrimaryCta: {
      label: 'View collection',
      href: '#san-pham',
      icon: ArrowRight
    },
    heroSecondaryCta: {
      label: 'Contact now',
      href: 'tel:19006789',
      icon: Phone
    },
    heroBadge: {
      title: 'Fast delivery',
      description: 'Within 120 minutes',
      icon: Clock
    },
    heroImage: {
      ...commonHeroImage,
      alt: 'Premium Bloom flower bouquet'
    },
    productsTitle: 'Featured arrangements',
    productsDescription:
      'Carefully selected and designed by our floral artisans.',
    productCategories: ['All', 'Wedding', 'Birthday', 'Grand opening', 'Sympathy'],
    featuredProducts: [
      {
        name: 'Deep Red Ecuador Rose Bouquet',
        price: '$49',
        category: 'Romance flowers',
        tag: 'Best seller',
        emoji: '🌹',
        href: '#lien-he'
      },
      {
        name: 'Pure White Tulip Flower Box',
        price: '$38',
        category: 'Premium flowers',
        tag: 'New',
        emoji: '🌷',
        href: '#lien-he'
      },
      {
        name: 'Radiant Sunflower Basket',
        price: '$27',
        category: 'Celebration flowers',
        emoji: '🌻',
        href: '#lien-he'
      },
      {
        name: 'Elegant Phalaenopsis Orchid Stand',
        price: '$99',
        category: 'Grand opening',
        tag: 'Premium',
        emoji: '🪷',
        href: '#lien-he'
      },
      {
        name: 'Fresh Blue Hydrangea Bouquet',
        price: '$18',
        category: 'Single stem flowers',
        emoji: '💠',
        href: '#lien-he'
      },
      {
        name: 'Pastel Mix Signature Box',
        price: '$44',
        category: 'Artistic flowers',
        tag: 'Favorite',
        emoji: '🌸',
        href: '#lien-he'
      }
    ],
    moreProductsLabel: 'See 200+ more floral designs',
    aboutEyebrow: 'About the brand',
    aboutTitle: 'About Bloom',
    aboutDescription:
      'Bloom is a contemporary flower boutique focused on emotion, delivery speed, and a seamless gifting experience for customers in Ho Chi Minh City.',
    aboutStats: [
      {
        title: '2 hours',
        description: 'Fast inner-city delivery in Ho Chi Minh City.',
        tone: 'rose'
      },
      {
        title: 'Custom design',
        description: 'Personalized bouquets based on occasion and budget.',
        tone: 'slate'
      },
      {
        title: '24/7 support',
        description: 'Quick assistance via hotline, Zalo, and Messenger.',
        tone: 'emerald'
      }
    ],
    contactTitle: 'Custom floral orders',
    contactDescription:
      'Want a one-of-a-kind arrangement? Leave us a message and our team will design the best bouquet for your idea and occasion.',
    contactPoints: [
      {
        label: 'Support hotline',
        value: '1900 6789',
        icon: Phone
      },
      {
        label: 'Store address',
        value: '123 Rose Street, District 1, Ho Chi Minh City',
        icon: MapPin
      },
      {
        label: 'Zalo/Messenger consultation',
        value: 'Live chat available 24/7',
        icon: MessageCircle
      }
    ],
    formLabels: {
      fullName: 'Full name',
      phone: 'Phone number',
      occasion: 'Occasion',
      message: 'Message / Special request',
      submit: 'Send floral request'
    },
    formPlaceholders: {
      fullName: 'Jane Doe',
      phone: '+84 90 123 xxxx',
      message: 'Describe the bouquet style or the message you want to send...'
    },
    occasionOptions: ['Birthday', 'Wedding anniversary', 'Grand opening', 'Other...'],
    footerDescription:
      'We believe every flower carries a unique story. Bloom exists to help you tell that story beautifully and thoughtfully.',
    footerLinksTitle: 'Quick links',
    footerLinks: [
      { label: 'About us', href: '#gioi-thieu' },
      { label: 'Collections', href: '#san-pham' },
      { label: 'Delivery policy', href: '#lien-he' },
      { label: 'Terms of service', href: '#lien-he' }
    ],
    newsletterTitle: 'Subscribe for offers',
    newsletterDescription: 'Get a 10% voucher for your first order.',
    newsletterPlaceholder: 'Your email',
    newsletterSubmitLabel: 'Subscribe',
    footerYearLabel: '© 2024 Bloom Flower Shop. Designed for Elegance.',
    structuredDataName: 'Bloom Flower Shop',
  }
};

export function getMarketingDictionary(locale: Locale): MarketingDictionary {
  return dictionaries[locale];
}

export const sharedSocialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  phone: Phone,
  send: Send
};
