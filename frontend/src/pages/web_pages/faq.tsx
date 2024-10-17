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
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      question: 'How can I sign up for ${projectName}?',
      answer:
        "Signing up is easy. Just click on the 'Sign Up' button on our homepage and fill in your details. Once registered, you can start using ${projectName} immediately.",
    },
    {
      question: 'What features are included in the free plan?',
      answer:
        "The free plan includes essential features such as seamless integration, a personalized dashboard, and basic analytics. It's perfect for individuals managing their health records.",
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        '${projectName} uses advanced encryption technologies to protect your data. We prioritize your privacy and ensure that your information is safe and secure at all times.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes, you can upgrade your plan at any time. Simply go to your account settings and choose the plan that best suits your needs. Our Premium and Business plans offer additional features.',
    },
    {
      question: 'Is customer support available 24/7?',
      answer:
        'Yes, our dedicated support team is available 24/7 to assist you with any questions or issues you may have. You can contact us through the support form on our website.',
    },
    {
      question: 'Can I access ${projectName} on my mobile device?',
      answer:
        'Absolutely! ${projectName} is designed to be accessible on various devices, including mobile phones and tablets, so you can manage your health records on the go.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, security, and how to get the most out of our platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'Health care'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Health care'}
          image={['FAQ section illustration']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. We're here to help you make the most of our platform.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Health care'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Health care'}
          design={ContactFormDesigns.HIGHLIGHTED_DIVERSITY || ''}
          image={['Customer support assistance illustration']}
          mainText={`Get in Touch with ${projectName} Support `}
          subTitle={`We're here to help! Reach out to us with any questions or feedback, and the ${projectName} team will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'Health care'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
