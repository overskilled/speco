import { useTranslation } from "react-i18next";
import Header from "./components/Header";

const { t } = useTranslation();


export const metadata = {
    title: t('correction-l.A1'),
    description: t('correction-l.A2'),
};



export default function CorrectionsLayout({ children }) {
    return (
        <div className="corrections-layout">
            <Header />

            <main className="container mx-auto px-6 py-8">
                {children}
            </main>

            <footer className="bg-blue-500 text-white p-4 text-center">
                <p>{t('correction-l.A3')}</p>
            </footer>
        </div>
    );
}
