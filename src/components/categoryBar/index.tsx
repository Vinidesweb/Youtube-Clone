import { useState, useRef } from "react";
import { Container, Category, ArrowButton } from "./styles";

const categories = [
  "Tudo", "Jogos", "Podcasts", "Música", "Notícias",
  "Ao vivo", "Programação", "Filmes", "Esportes", "Tecnologia", "Comédia", "Entretenimento", "Beleza e moda", "Culinária", "Viagens e eventos",
];

function CategoryBar() {
  const [selected, setSelected] = useState("Tudo");
  const [showLeft, setShowLeft] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setShowLeft(containerRef.current.scrollLeft > 0);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {showLeft && <ArrowButton onClick={scrollLeft}>❮</ArrowButton>}
      <Container ref={containerRef} onScroll={handleScroll}>
        {categories.map((category) => (
          <Category
            key={category}
            $active={selected === category}
            onClick={() => setSelected(category)}
          >
            {category}
          </Category>
        ))}
      </Container>
      <ArrowButton onClick={scrollRight}>❯</ArrowButton>
    </div>
  );
}

export default CategoryBar;