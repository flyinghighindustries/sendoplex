import React from "react";
import Modal from "./Modal";

interface CookieConsentProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  c_privacyPolicy: any;
  locale?: string;
}

// Legacy cookie consent banner is disabled — Cookiebot (via GTM) now owns
// consent UI. This component still renders the privacy policy Modal, which
// the footer's "Privacy" link relies on via the same isModalOpen state.
const CookieConsent = ({
  isModalOpen,
  handleCloseModal,
  c_privacyPolicy,
  locale = "et",
}: CookieConsentProps) => {
  return (
    <Modal show={isModalOpen} onClose={handleCloseModal} c_privacyPolicy={c_privacyPolicy} locale={locale} />
  );
};

export default CookieConsent;
