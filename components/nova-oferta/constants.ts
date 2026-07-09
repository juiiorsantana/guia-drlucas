// Constantes compartilhadas entre as seções da nova oferta
export const CHECKOUT_URL = 'https://pay.hotmart.com/N106123722W';

export const goToCheckout = () => {
    window.location.href = CHECKOUT_URL;
};
