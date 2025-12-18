import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import styles from '../../../../src/pages/index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Translated Modules
  const modules = [
    {
      title: 'ماڈیول 1: ROS 2 کی بنیادیں',
      description: 'ROS 2 سیکھیں - جدید روبوٹس کا اعصابی نظام۔ نوڈز، ٹوپکس، سروسز، ایکشنز اور حقیقی روبوٹ ورک فلو بنائیں۔',
      link: '/docs/Module-1-ROS2/nodes-topics',
    },
    {
      title: 'ماڈیول 2: نقالی اور ڈیجیٹل ٹوئنز',
      description: 'سمولیشن سسٹم پر عبور حاصل کریں: Gazebo، Unity Robotics، اور Isaac Sim۔ روبوٹس کو محفوظ طریقے سے ٹیسٹ کریں۔',
      link: '/docs/Module-2-Simulation/gazebo-physics',
    },
    {
      title: 'ماڈیول 3: ہارڈ ویئر اور ذہانت',
      description: 'موٹرز، ایکچیوٹرز، سینسرز، اور ایمبیڈڈ سسٹمز - انسانی نما روبوٹس کے لیے ضروری ہر چیز۔',
      link: '/docs/Module-3-Brain/isaac-sim',
    },
    {
      title: 'ماڈیول 4: VLA - بصارت، زبان، عمل',
      description: 'روبوٹکس کا جدید ترین آرکیٹیکچر: پرسیپشن ماڈلز، LLMs، اور جدید AI سے چلنے والی نقل و حرکت۔',
      link: '/docs/Module-4-VLA/voice-to-action',
    },
    {
      title: 'ماڈیول 5: جدید AI اور کنٹرول',
      description: 'ری انفورسمنٹ لرننگ، موشن پلاننگ، اور روبوٹس کو ذہین اور موافق بنانا سیکھیں۔',
      link: '/docs/Module-5-Humanoid-Design/kinematics-locomotion',
    },
    {
      title: 'ماڈیول 6: ہیومنائیڈ روبوٹس کی ڈیزائننگ',
      description: 'ہیومنائیڈ کی تخلیق: مکینیکل ڈیزائن، کینیمیٹکس، اور AI سے چلنے والی حرکت۔',
      link: '/docs/Module-6-Advanced-Control/reinforcement-learning',
    },
  ];

  const features = [
    {
      title: 'AI سے چلنے والا ڈیزائن',
      description: 'LLMs، AI ایجنٹس، اور ملٹی موڈل استدلال کے ساتھ مکمل طور پر جدید - صرف پرانے الگورتھم نہیں۔',
    },
    {
      title: 'ہینڈز آن لرننگ',
      description: 'ہر ماڈیول میں پریکٹیکل لیبز، پروجیکٹس، اور حقیقی دنیا کی ایپلی کیشنز شامل ہیں۔',
    },
    {
      title: 'صنعت سے متاثر نصاب',
      description: 'نصاب حقیقی دنیا کی طلب کی عکاسی کرتا ہے: Figure AI، Agility، اور جدید کمپنیوں کا روڈ میپ۔',
    },
  ];

  return (
    <Layout
      title="فزیکل AI اور ہیومنائیڈ روبوٹکس"
      description="ہیومنائیڈ روبوٹکس اور جدید AI کے لیے ایک مکمل اور عملی سیکھنے کا نظام"
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Physical AI & Humanoid Robotics Textbook</h1>
          <p className={styles.heroDescription}>
            ایک مکمل اور عملی سیکھنے کا نظام جہاں آپ مستقبل پر عبور حاصل کرتے ہیں: ہیومنائیڈ روبوٹکس،
            ROS 2، لارج ایکشن ماڈلز، سمولیشن، اور اگلی نسل کی ذہین مشینوں کے لیے جدید AI۔
          </p>
          <Link to="/docs/Introduction/vision" className={styles.ctaButton}>
            پڑھنا شروع کریں →
          </Link>
        </div>
      </section>

      {/* What This Textbook Covers */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>یہ نصابی کتاب کیا سکھاتی ہے؟</h2>
          <p className={styles.sectionDescription}>
            یہ ایک مکمل AI-نیٹو انجینئرنگ نصاب ہے جو فزیکل AI، ہیومنائیڈ روبوٹس،
            ایمبیڈڈ انٹیلی جنس، ROS 2 پروگرامنگ، اور VLA سسٹمز کے لیے ڈیزائن کیا گیا ہے۔
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className={styles.modulesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>ماڈیولز دریافت کریں</h2>
          <div className={styles.modulesGrid}>
            {modules.map((module, index) => (
              <div key={index} className={styles.moduleCard}>
                <h3 className={styles.moduleCardTitle}>{module.title}</h3>
                <p className={styles.moduleDescription}>{module.description}</p>
                <Link to={module.link} className={styles.moduleButton}>
                  ماڈیول کھولیں →
                </Link>
              </div>
            ))}

            {/* Appendix Card */}
            <div className={`${styles.moduleCard} ${styles.appendixCard}`}>
              <h3 className={styles.moduleCardTitle}>ضمیمہ (Appendix)</h3>
              <p className={styles.moduleDescription}>
                لغت، تحقیقی مقالے، حوالہ جات، اور مزید مطالعہ۔
              </p>
              <Link to="/docs/Appendices/lab-setup-guide" className={styles.moduleButton}>
                ضمیمہ کھولیں →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>اپنا روبوٹکس کا سفر شروع کریں</h2>
          <p className={styles.ctaText}>
            مستقبل فزیکل AI اور ہیومنائیڈ روبوٹکس کا ہے۔
            آج ہی اس پر عبور حاصل کرنا شروع کریں۔
          </p>
          <Link to="/docs/Introduction/vision" className={styles.ctaButtonLarge}>
            پڑھنا شروع کریں →
          </Link>
        </div>
      </section>
    </Layout>
  );
}