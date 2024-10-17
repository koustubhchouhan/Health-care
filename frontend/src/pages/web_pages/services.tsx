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
  FeaturesDesigns,
  PricingDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const features_points = [
    {
      name: 'Seamless Integration',
      description:
        'Easily integrate ${projectName} with your existing healthcare systems. Our platform ensures smooth data flow and compatibility.',
      icon: 'mdiIntegration',
    },
    {
      name: 'Personalized Dashboard',
      description:
        'Customize your dashboard to display the information that matters most to you. ${projectName} offers a personalized experience tailored to your needs.',
      icon: 'mdiViewDashboard',
    },
    {
      name: 'Comprehensive Analytics',
      description:
        'Gain insights into your health data with our comprehensive analytics tools. ${projectName} helps you make informed decisions about your health.',
      icon: 'mdiChartLine',
    },
    {
      name: '24/7 Support',
      description:
        'Access round-the-clock support from our dedicated team. ${projectName} is here to assist you whenever you need help.',
      icon: 'mdiHeadset',
    },
    {
      name: 'Secure Data Encryption',
      description:
        'Your data is protected with advanced encryption technologies. ${projectName} ensures your health information remains confidential and secure.',
      icon: 'mdiLock',
    },
    {
      name: 'Multi-Device Access',
      description:
        'Access your health records from any device, anywhere. ${projectName} offers flexibility and convenience for managing your health on the go.',
      icon: 'mdiDevices',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Seamless Integration',
        'Personalized Dashboard',
        'Comprehensive Analytics',
      ],
      limited_features: ['Basic Support', 'Limited Data Storage'],
    },
    premium: {
      features: [
        'Seamless Integration',
        'Personalized Dashboard',
        'Comprehensive Analytics',
        '24/7 Support',
      ],
      also_included: ['Advanced Data Storage', 'Priority Customer Service'],
    },
    business: {
      features: [
        'Seamless Integration',
        'Personalized Dashboard',
        'Comprehensive Analytics',
        '24/7 Support',
        'Secure Data Encryption',
        'Multi-Device Access',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is perfect for individuals looking to manage their health records with essential features and basic support.',
    premium:
      'The Premium plan is ideal for small startups or agencies that require advanced features, enhanced support, and additional storage.',
    business:
      'The Business plan is designed for enterprises needing comprehensive features, top-tier support, and maximum data security.',
  };

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our team. The seamless integration and user-friendly interface make managing health records a breeze.',
      company: 'TechHealth Solutions',
      user_name: 'Jessica Taylor, Project Manager',
    },
    {
      text: 'We love the personalized dashboard feature. It allows us to tailor the experience to our needs, making ${projectName} an invaluable tool.',
      company: 'Wellness Innovators',
      user_name: 'Mark Thompson, Operations Lead',
    },
    {
      text: 'The 24/7 support provided by ${projectName} is exceptional. Their team is always ready to assist us with any queries or issues.',
      company: 'CareFirst Enterprises',
      user_name: 'Emily White, Customer Support Manager',
    },
    {
      text: 'With ${projectName}, we have access to comprehensive analytics that help us make informed decisions about our health management strategies.',
      company: 'HealthTech Pioneers',
      user_name: 'David Green, Data Analyst',
    },
    {
      text: 'The secure data encryption feature gives us peace of mind knowing our sensitive information is protected at all times.',
      company: 'SecureHealth Corp.',
      user_name: 'Sophia Brown, IT Security Specialist',
    },
    {
      text: 'Multi-device access is a standout feature of ${projectName}. It allows our team to stay connected and manage records on the go.',
      company: 'MobileHealth Solutions',
      user_name: 'James Wilson, Mobile Solutions Architect',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - Explore What We Offer`}</title>
        <meta
          name='description'
          content={`Discover the range of services provided by ${projectName}. Learn about our features, pricing, and how we can help you manage your health records efficiently.`}
        />
      </Head>
      <WebSiteHeader projectName={'Health care'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Health care'}
          image={['Healthcare services overview illustration']}
          mainText={`Unlock the Power of ${projectName} Services`}
          subTitle={`Explore the comprehensive services offered by ${projectName} to streamline your health management. Discover how we can support your healthcare journey.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Discover Our Services`}
        />

        <FeaturesSection
          projectName={'Health care'}
          image={['Feature highlights illustration']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Key Features`}
          subTitle={`Discover how ${projectName} enhances your healthcare management with innovative features designed for your convenience.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'Health care'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <TestimonialsSection
          projectName={'Health care'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied ${projectName} Users `}
        />

        <ContactFormSection
          projectName={'Health care'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Customer service team illustration']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have questions or need assistance? Contact us anytime, and our team will respond promptly to ensure you have the best experience with ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'Health care'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
