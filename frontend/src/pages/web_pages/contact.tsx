import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Health care';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account on ${projectName}?',
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage and fill in your details. Once registered, you can start managing your health records immediately.",
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, your data is protected with advanced encryption technologies. We prioritize your privacy and ensure that your information is safe and secure.',
    },
    {
      question: 'Can I access ${projectName} on multiple devices?',
      answer:
        'Absolutely! ${projectName} is designed to be accessible on various devices, allowing you to manage your health records from anywhere, anytime.',
    },
    {
      question: 'What should I do if I forget my password?',
      answer:
        "If you forget your password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password and regain access to your account.",
    },
    {
      question: 'Are there any fees associated with using ${projectName}?',
      answer:
        'Currently, ${projectName} offers a free plan with essential features. For advanced features, you can explore our Premium and Business plans.',
    },
    {
      question: 'How can I contact support if I have an issue?',
      answer:
        'You can reach out to our support team via the contact form on our website. We are available 24/7 to assist you with any issues or questions you may have.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to the ${projectName} team for any inquiries or support. We're here to help you with your healthcare management needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'Health care'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Health care'}
          image={['Friendly customer support team']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to assist you with any questions or support you need. Reach out to the ${projectName} team and let us help you manage your healthcare effectively.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'Health care'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Health care'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Email communication illustration']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`We're available to assist you with any inquiries or support needs. Contact us anytime, and the ${projectName} team will respond promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Health care'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
