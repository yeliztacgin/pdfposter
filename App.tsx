
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PosterGenerator from './components/PosterGenerator';
import WelcomeHero from './components/WelcomeHero';

function App() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onReset={handleReset} hasImage={!!image} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {!image ? (
          <WelcomeHero onUpload={handleImageUpload} />
        ) : (
          <PosterGenerator 
            imageSrc={image} 
            onReset={handleReset}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
