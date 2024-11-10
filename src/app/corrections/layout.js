import Header from "./components/Header";


export const metadata = {
    title: 'Corrections - Video Page',
    description: 'Watch and learn from video corrections.',
};



export default function CorrectionsLayout({ children }) {
    return (
        <div className="corrections-layout">
            <Header />

            <main className="container mx-auto px-6 py-8">
                {children}
            </main>

            <footer className="bg-blue-500 text-white p-4 text-center">
                <p>© 2024 Speco. All rights reserved.</p>
            </footer>
        </div>
    );
}
