import React, { useState } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = (): JSX.Element => {
    const { i18n } = useDocusaurusContext();
    const location = useLocation();
    const currentLocale = i18n.currentLocale;
    const isUrdu = currentLocale === 'ur';

    const [isLoading, setIsLoading] = useState(false);

    const toggleLanguage = () => {
        setIsLoading(true);
        const targetLocale = isUrdu ? 'en' : 'ur';

        // Simulate animation delay before navigation
        setTimeout(() => {
            // Logic to switch path: /ur/foo -> /foo, /foo -> /ur/foo
            let newPath = location.pathname;
            if (isUrdu) {
                newPath = newPath.replace(/^\/ur/, '') || '/';
            } else {
                newPath = `/ur${newPath === '/' ? '' : newPath}`;
            }
            window.location.href = newPath;
        }, 800);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={toggleLanguage}
                className="language-toggle-btn"
                aria-label="Switch Language"
                style={{
                    position: 'fixed',
                    bottom: '100px', // Above chat button
                    right: '24px',
                    zIndex: 9998,
                    background: isUrdu ? '#10b981' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    transition: 'transform 0.2s',
                }}
            >
                {isUrdu ? 'EN' : 'اردو'}
            </button>

            {/* Screen Overlay Animation */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at 95% 90%)' }}
                        animate={{ clipPath: 'circle(150% at 95% 90%)' }}
                        exit={{ clipPath: 'circle(0% at 95% 90%)' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: isUrdu ? '#3b82f6' : '#10b981', // Next color
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ color: 'white', fontSize: '3rem', fontFamily: 'Space Grotesk' }}
                        >
                            {isUrdu ? 'Switching to English...' : 'اردو میں تبدیل ہو رہا ہے...'}
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LanguageSwitcher;
