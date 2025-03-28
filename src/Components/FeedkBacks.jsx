import React, { useState } from "react";

// Lista de feedbacks com dados, fotos e comentários dos pacientes
const feedbackList = [
  {
    patientName: "Maria Silva",
    sessionType: "Preenchimento com Ácido Hialurônico",
    feedback:
      "Fiquei muito satisfeita com o resultado. A doutora foi super atenciosa e profissional. Recomendo para todos que buscam um visual mais rejuvenescido e natural.",
    date: "2025-02-20",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    patientName: "João Souza",
    sessionType: "Toxina Botulínica",
    feedback:
      "Os resultados foram incríveis. Senti uma diferença significativa logo após a sessão. Com certeza, um serviço de alta qualidade.",
    date: "2025-02-18",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    patientName: "Ana Pereira",
    sessionType: "Bioestimulador de Colágeno",
    feedback:
      "Minha pele está mais firme e com um aspecto muito natural. A explicação detalhada da doutora me deixou tranquila e confiante.",
    date: "2025-02-15",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Função para navegar para o próximo feedback
  const handleNext = () => {
    setExpanded(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackList.length);
  };

  // Função para navegar para o feedback anterior
  const handlePrev = () => {
    setExpanded(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackList.length) % feedbackList.length);
  };

  // Alterna entre expandir ou recolher o comentário
  const toggleExpand = (e) => {
    e.stopPropagation(); // Impede que o clique se propague para o cartão
    setExpanded(!expanded);
  };

  const currentFeedback = feedbackList[currentIndex];

  return (
    <>
      {/* CSS embutido */}
      <style>{`
        .feedback-section {
          background: #f9f9f9;
          padding: 2rem;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        .carousel-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;
        }
        .carousel-button {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          margin: 0 1rem;
          transition: color 0.3s ease;
        }
        .carousel-button:hover {
          color: #3498db;
        }
        .feedback-card {
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
          width: 400px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .feedback-card:hover {
          transform: scale(1.02);
        }
        .feedback-photo img {
          width: 100%;
          height: auto;
        }
        .feedback-info {
          padding: 1rem;
          text-align: left;
        }
        .feedback-info h3 {
          margin-top: 0;
          color: #333;
        }
        .feedback-meta {
          color: #777;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .feedback-text {
          font-size: 1rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }
        .expand-button {
          background: none;
          border: none;
          color: #3498db;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0;
        }
      `}</style>
      <section className="feedback-section" id="feedback">
        <h2>Feedbacks das Sessões</h2>
        <div className="carousel-container">
          <button className="carousel-button" onClick={handlePrev}>
            ❮
          </button>
          <div className="feedback-card" onClick={toggleExpand}>
            <div className="feedback-photo">
              <img src={currentFeedback.photo} alt={`Foto de ${currentFeedback.patientName}`} />
            </div>
            <div className="feedback-info">
              <h3>{currentFeedback.sessionType}</h3>
              <p className="feedback-meta">
                <strong>{currentFeedback.patientName}</strong> - <em>{currentFeedback.date}</em>
              </p>
              <p className="feedback-text">
                {expanded
                  ? currentFeedback.feedback
                  : currentFeedback.feedback.length > 100
                  ? currentFeedback.feedback.substring(0, 100) + "..."
                  : currentFeedback.feedback}
              </p>
              {currentFeedback.feedback.length > 100 && (
                <button className="expand-button" onClick={toggleExpand}>
                  {expanded ? "Mostrar Menos" : "Leia Mais"}
                </button>
              )}
            </div>
          </div>
          <button className="carousel-button" onClick={handleNext}>
            ❯
          </button>
        </div>
      </section>
    </>
  );
};

export default FeedbackCarousel;
