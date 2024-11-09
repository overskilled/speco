import Header from "./components/Header";


export const metadata = {
    title: 'Corrections - Video Page',
    description: 'Watch and learn from video corrections.',
};



export default function CorrectionsLayout({ children }) {
    return (
        <div className="corrections-layout">
            <Header />

            <main className="p-8 bg-gray-50 min-h-screen">
                {children}  {/* This renders the page content */}
            </main>

            <footer className="bg-blue-500 text-white p-4 text-center">
                <p>© 2024 Speco. All rights reserved.</p>
            </footer>
        </div>
    );
}
