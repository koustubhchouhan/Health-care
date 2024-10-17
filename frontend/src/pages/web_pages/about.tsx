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
  AboutUsDesigns,
  ContactFormDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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
      name: 'User-Friendly Interface',
      description:
        'Navigate through ${projectName} with ease. Our intuitive design ensures that users of all ages can manage their health records without any hassle.',
      icon: 'mdiMonitor',
    },
    {
      name: 'Real-Time Updates',
      description:
        'Stay informed with instant updates to your health records. ${projectName} ensures that you always have the latest information at your fingertips.',
      icon: 'mdiUpdate',
    },
    {
      name: 'Customizable Settings',
      description:
        'Tailor ${projectName} to fit your needs. Customize your experience with settings that allow you to manage your health records in a way that suits you best.',
      icon: 'mdiSettings',
    },
  ];

  const testimonials = [
    {
      text: "Using ${projectName} has transformed the way I manage my health records. It's intuitive and reliable, making my life so much easier.",
      company: 'HealthTech Innovations',
      user_name: 'Alice Johnson, Chief Health Officer',
    },
    {
      text: '${projectName} is a game-changer! The real-time updates and secure storage give me peace of mind knowing my data is safe.',
      company: 'Wellness Solutions Inc.',
      user_name: 'Michael Smith, IT Manager',
    },
    {
      text: 'I love how customizable ${projectName} is. It fits perfectly into my daily routine and helps me stay on top of my health.',
      company: 'LifeCare Partners',
      user_name: 'Emily Davis, Operations Director',
    },
    {
      text: "The user-friendly interface of ${projectName} makes it accessible for everyone. It's a must-have tool for health management.",
      company: 'Future Health Corp.',
      user_name: 'John Brown, Product Manager',
    },
    {
      text: 'As a healthcare provider, ${projectName} allows me to efficiently manage patient records and improve service delivery.',
      company: 'CareFirst Solutions',
      user_name: 'Sarah Wilson, Healthcare Provider',
    },
    {
      text: "The seamless integration and ease of use make ${projectName} stand out. It's an essential part of my health management toolkit.",
      company: 'Innovative Health Systems',
      user_name: 'David Lee, Senior Analyst',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Discover Our Mission and Vision`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, values, and the team behind ${projectName}. Discover how we aim to revolutionize healthcare management.`}
        />
      </Head>
      <WebSiteHeader projectName={'Health care'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Health care'}
          image={['Team working towards innovation']}
          mainText={`Unveiling the Heart of ${projectName}`}
          subTitle={`Discover the passion and dedication driving ${projectName}. Learn about our mission to transform healthcare management for everyone.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'Health care'}
          image={['Team brainstorming session']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`At ${projectName}, we are committed to enhancing healthcare accessibility and efficiency. Our team is passionate about creating solutions that empower users to manage their health effortlessly.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'Health care'}
          image={['Features overview illustration']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover how ${projectName} is designed to simplify and enhance your healthcare management experience.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'Health care'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Users Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Health care'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Customer support team illustration']}
          mainText={`Connect with ${projectName} Team `}
          subTitle={`We're here to help! Reach out to us anytime with your questions or feedback, and we'll get back to you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Health care'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
