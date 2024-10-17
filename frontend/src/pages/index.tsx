import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  AboutUsDesigns,
  FaqDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import FaqSection from '../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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

  const features_points = [
    {
      name: 'Easy Registration',
      description:
        'Quickly sign up and start managing your health records with ease. Our user-friendly interface ensures a smooth registration process.',
      icon: 'mdiAccountPlus',
    },
    {
      name: 'Secure Data Storage',
      description:
        'Your health records are stored securely with in-memory storage, ensuring privacy and quick access whenever you need it.',
      icon: 'mdiLock',
    },
    {
      name: 'Instant Record Access',
      description:
        'View and manage your health records instantly. Stay informed and in control of your health information at all times.',
      icon: 'mdiFileDocument',
    },
  ];

  const faqs = [
    {
      question: 'How do I register for ${projectName}?',
      answer:
        "To register, simply click on the 'Get Started' button on the homepage and fill out the registration form with your name and age. It's quick and easy!",
    },
    {
      question: 'Is my health data secure with ${projectName}?',
      answer:
        'Yes, your health data is stored securely using in-memory storage, ensuring that your information is private and accessible only to you.',
    },
    {
      question: 'Can I access my health records anytime?',
      answer:
        'Absolutely! With ${projectName}, you can view and manage your health records at any time, giving you full control over your health information.',
    },
    {
      question: 'What if I forget my login details?',
      answer:
        "If you forget your login details, you can use the 'Forgot Password' feature on the login page to reset your password and regain access to your account.",
    },
    {
      question: 'Are there any fees to use ${projectName}?',
      answer:
        'Currently, ${projectName} is free to use. We aim to provide accessible healthcare management for everyone. Any future pricing changes will be communicated in advance.',
    },
    {
      question: 'Can healthcare providers access my records?',
      answer:
        'Only if you grant them permission. ${projectName} allows you to share your health records with healthcare providers securely, ensuring your privacy is maintained.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Health Care App - Manage Your Health Records`}</title>
        <meta
          name='description'
          content={`Welcome to our Health Care App, where you can easily register and view your health records. Discover our features and learn more about our mission.`}
        />
      </Head>
      <WebSiteHeader projectName={'Health care'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Health care'}
          image={['Healthcare app interface illustration']}
          mainText={`Empower Your Health with ${projectName}`}
          subTitle={`Easily manage and access your health records with ${projectName}. Join us to take control of your health journey today.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started`}
        />

        <FeaturesSection
          projectName={'Health care'}
          image={['App features overview illustration']}
          withBg={1}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Explore how ${projectName} simplifies health record management and enhances your healthcare experience.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Health care'}
          image={['Team collaboration in healthcare']}
          mainText={`Meet the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to revolutionizing healthcare management. Our mission is to empower individuals with easy access to their health records, ensuring a seamless and secure experience.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'Health care'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Health care'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact support team illustration']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have questions or need assistance? Reach out to us anytime, and we'll respond promptly to help you with your ${projectName} experience.`}
        />
      </main>
      <WebSiteFooter projectName={'Health care'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
