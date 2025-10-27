"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Layout as AntLayout,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Button,
} from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";
import "@/app/styles/memory-game.css";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const { Content } = AntLayout;
const { Title } = Typography;

// Card interface definition
interface CardType {
  id: number;
  name: string;
  content: string;
  matchContent: string;
  isFlipped: boolean;
  isMatched: boolean;
  colorGroup:
    | "purple"
    | "blue"
    | "orange"
    | "pink"
    | "green"
    | "red"
    | "cyan"
    | "magenta";
}

// Props interface for CardComponent
interface CardComponentProps {
  card: CardType;
  handleCardClick: (id: number) => void;
}

// --- Dữ liệu Card (8 cặp, tổng cộng 16 thẻ) ---
const newCardData: CardType[] = [
  // Cặp 1: Định nghĩa Dân chủ
  {
    id: 1,
    name: "Def_1",
    content: "Nền dân chủ mà quyền lực thuộc về nhân dân",
    matchContent: "Dân chủ xã hội chủ nghĩa",
    isFlipped: false,
    isMatched: false,
    colorGroup: "purple",
  },
  {
    id: 2,
    name: "Def_1_Match",
    content: "Dân chủ xã hội chủ nghĩa",
    matchContent: "Nền dân chủ mà quyền lực thuộc về nhân dân",
    isFlipped: false,
    isMatched: false,
    colorGroup: "purple",
  },
  // Cặp 2: Yếu tố bảo đảm
  {
    id: 3,
    name: "BaoDam_2",
    content: "Yếu tố bảo đảm dân chủ đi đúng định hướng",
    matchContent: "Sự lãnh đạo của Đảng Cộng sản",
    isFlipped: false,
    isMatched: false,
    colorGroup: "blue",
  },
  {
    id: 4,
    name: "BaoDam_2_Match",
    content: "Sự lãnh đạo của Đảng Cộng sản",
    matchContent: "Yếu tố bảo đảm dân chủ đi đúng định hướng",
    isFlipped: false,
    isMatched: false,
    colorGroup: "blue",
  },
  // Cặp 3: Công cụ thực hiện
  {
    id: 5,
    name: "CongCu_3",
    content: "Dân chủ XHCN được thực hiện bằng công cụ nào",
    matchContent: "Nhà nước pháp quyền XHCN",
    isFlipped: false,
    isMatched: false,
    colorGroup: "orange",
  },
  {
    id: 6,
    name: "CongCu_3_Match",
    content: "Nhà nước pháp quyền XHCN",
    matchContent: "Dân chủ XHCN được thực hiện bằng công cụ nào",
    isFlipped: false,
    isMatched: false,
    colorGroup: "orange",
  },
  // Cặp 4: Giai cấp lãnh đạo
  {
    id: 7,
    name: "GiaiCap_4",
    content: "Giai cấp giữ vai trò lãnh đạo chính trị trong dân chủ XHCN",
    matchContent: "Giai cấp công nhân",
    isFlipped: false,
    isMatched: false,
    colorGroup: "pink",
  },
  {
    id: 8,
    name: "GiaiCap_4_Match",
    content: "Giai cấp công nhân",
    matchContent: "Giai cấp giữ vai trò lãnh đạo chính trị trong dân chủ XHCN",
    isFlipped: false,
    isMatched: false,
    colorGroup: "pink",
  },
  // Cặp 5: Tôn trọng Con người
  {
    id: 9,
    name: "ConNguoi_5",
    content: "Nhà nước pháp quyền XHCN tôn trọng điều gì",
    matchContent: "Quyền con người, coi con người là trung tâm",
    isFlipped: false,
    isMatched: false,
    colorGroup: "green",
  },
  {
    id: 10,
    name: "ConNguoi_5_Match",
    content: "Quyền con người, coi con người là trung tâm",
    matchContent: "Nhà nước pháp quyền XHCN tôn trọng điều gì",
    isFlipped: false,
    isMatched: false,
    colorGroup: "green",
  },
  // Cặp 6: Bản chất
  {
    id: 11,
    name: "BanChat_6",
    content: "Bản chất dân chủ XHCN Việt Nam thể hiện ở",
    matchContent: "Dân là gốc, vừa là mục tiêu vừa là động lực phát triển",
    isFlipped: false,
    isMatched: false,
    colorGroup: "red",
  },
  {
    id: 12,
    name: "BanChat_6_Match",
    content: "Dân là gốc, vừa là mục tiêu vừa là động lực phát triển",
    matchContent: "Bản chất dân chủ XHCN Việt Nam thể hiện ở",
    isFlipped: false,
    isMatched: false,
    colorGroup: "red",
  },
  // Cặp 7: Thể chế hóa
  {
    id: 13,
    name: "TheChe_7",
    content: "Dân chủ XHCN được thể chế hóa bằng",
    matchContent: "Pháp luật, kỷ luật và kỷ cương",
    isFlipped: false,
    isMatched: false,
    colorGroup: "cyan",
  },
  {
    id: 14,
    name: "TheChe_7_Match",
    content: "Pháp luật, kỷ luật và kỷ cương",
    matchContent: "Dân chủ XHCN được thể chế hóa bằng",
    isFlipped: false,
    isMatched: false,
    colorGroup: "cyan",
  },
  // Cặp 8: Hình thức
  {
    id: 15,
    name: "HinhThuc_8",
    content: "Hai hình thức thực hiện dân chủ ở Việt Nam",
    matchContent: "Dân chủ trực tiếp và dân chủ gián tiếp",
    isFlipped: false,
    isMatched: false,
    colorGroup: "magenta",
  },
  {
    id: 16,
    name: "HinhThuc_8_Match",
    content: "Dân chủ trực tiếp và dân chủ gián tiếp",
    matchContent: "Hai hình thức thực hiện dân chủ ở Việt Nam",
    isFlipped: false,
    isMatched: false,
    colorGroup: "magenta",
  },
];

const matchColors = {
  purple: {
    background: "#e6e6fa",
    border: "#9370db",
    text: "#4b0082",
  },
  blue: {
    background: "#e0f2f7",
    border: "#4682b4",
    text: "#2f4f4f",
  },
  orange: {
    background: "#ffe0b2",
    border: "#ff9800",
    text: "#e65100",
  },
  pink: {
    background: "#fce4ec",
    border: "#e91e63",
    text: "#ad1457",
  },
  green: {
    background: "#d4edda",
    border: "#1e7e34",
    text: "#155724",
  },
  red: {
    background: "#f8d7da",
    border: "#dc3545",
    text: "#721c24",
  },
  cyan: {
    background: "#d1ecf1",
    border: "#117a8b",
    text: "#0c5460",
  },
  magenta: {
    background: "#f3e5f5",
    border: "#ab47bc",
    text: "#6a1b9a",
  },
};

// Hàm trộn thẻ
const shuffleCards = (array: CardType[]): CardType[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Component thẻ
const CardComponent: React.FC<CardComponentProps> = ({
  card,
  handleCardClick,
}) => {
  const cardContainerStyle: React.CSSProperties = {
    height: "150px",
    perspective: "1000px",
    cursor: card.isMatched ? "default" : "pointer",
  };

  const cardInnerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    transform: card.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const cardFaceStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  } as const;

  const frontFaceStyle: React.CSSProperties = {
    ...cardFaceStyle,
    backgroundColor: "#bae7ff",
  };

  const backFaceStyle: React.CSSProperties = {
    ...cardFaceStyle,
    backgroundColor: card.isMatched
      ? matchColors[card.colorGroup].background
      : "#fffbe6",
    border: card.isMatched
      ? `2px solid ${matchColors[card.colorGroup].border}`
      : "1px solid #d9d9d9",
    transform: "rotateY(180deg)",
    color: card.isMatched ? matchColors[card.colorGroup].text : "#000",
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getContentClass = () => {
    if (card.content.length > 50) return "card-content card-content-small";
    if (card.content.length > 30) return "card-content card-content-medium";
    return "card-content card-content-large";
  };

  return (
    <div
      style={cardContainerStyle}
      onClick={() => !card.isMatched && handleCardClick(card.id)}
    >
      <div style={cardInnerStyle}>
        <Card style={frontFaceStyle} styles={{ body: { padding: 0 } }}>
          <Title level={3} style={{ margin: 0 }}>
            ?
          </Title>
        </Card>
        {mounted && (
          <Card style={backFaceStyle} styles={{ body: { padding: 0 } }}>
            <div className={getContentClass()}>{card.content}</div>
          </Card>
        )}
      </div>
    </div>
  );
};

const MemoryGame = () => {
  const [cards, setCards] = useState<CardType[]>(() =>
    shuffleCards(newCardData)
  );
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (startTime && !isGameOver) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTime, isGameOver]);

  const resetGame = useCallback(() => {
    setLockBoard(false);
    setFlippedCards([]);
    setCards(shuffleCards(newCardData));
    setStartTime(null);
    setElapsedTime(0);
    setIsGameOver(false);
  }, []);

  const checkForMatch = useCallback(() => {
    const [id1, id2] = flippedCards;
    const card1 = cards.find((c) => c.id === id1);
    const card2 = cards.find((c) => c.id === id2);
    const isMatch = card1 && card2 && card1.content === card2.matchContent;

    if (isMatch) {
      setCards((prevCards) =>
        prevCards.map((c) => {
          if (c.id === id1 || c.id === id2) {
            return { ...c, isMatched: true, isFlipped: true };
          }
          return c;
        })
      );
      setFlippedCards([]);
      setLockBoard(false);
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((c) => {
            if (c.id === id1 || c.id === id2) {
              return { ...c, isFlipped: false };
            }
            return c;
          })
        );
        setFlippedCards([]);
        setLockBoard(false);
      }, 1500);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (id: number): void => {
    if (lockBoard || flippedCards.includes(id) || isGameOver) return;

    if (flippedCards.length === 0 && startTime === null) {
      setStartTime(Date.now());
    }

    setCards((prevCards) =>
      prevCards.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards((prevFlipped) => [...prevFlipped, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setLockBoard(true);
      checkForMatch();
    }
  }, [flippedCards, checkForMatch]);

  useEffect(() => {
    const allMatched = cards.every((card) => card.isMatched);
    if (allMatched && cards.length > 0 && !isGameOver) {
      setIsGameOver(true);

      MySwal.fire({
        title: (
          <Title level={3} style={{ color: "#52c41a" }}>
            🎉 HOÀN THÀNH!
          </Title>
        ),
        html: (
          <div>
            <p>Bạn đã tìm thấy tất cả các cặp thẻ.</p>
            <Title level={4}>
              Thời gian:{" "}
              <span style={{ color: "#1890ff" }}>
                {formatTime(elapsedTime)}
              </span>
            </Title>
          </div>
        ),
        icon: "success",
        confirmButtonText: "Chơi Lại",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          resetGame();
        }
      });
    }
  }, [cards, elapsedTime, isGameOver, resetGame]);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatted = [hours, minutes, seconds]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

    return hours > 0 ? formatted : formatted.substring(3);
  };

  const router = useRouter();

  return (
    <AntLayout
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f0e7",
        padding: "20px",
      }}
    >
      <Content style={{ maxWidth: "850px", margin: "0 auto", width: "100%" }}>
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <Button
            type="link"
            icon={<ArrowLeftOutlined />}
            onClick={() => router.push('/')}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
              color: "#c64949"
            }}
          />
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "#c64949",
              margin: 0,
            }}
          >
            Trò chơi Lật Thẻ Nhớ: Dân Chủ XHCN
          </Title>
        </div>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #d9d9d9",
              textAlign: "center",
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              Thời gian chơi:{" "}
              <span style={{ color: isGameOver ? "#52c41a" : "#1890ff" }}>
                {formatTime(elapsedTime)}
              </span>
            </Title>
          </div>

          <Button
            type="primary"
            onClick={resetGame}
            style={{ width: "100%", backgroundColor: "#a83232" }}
            danger={isGameOver}
          >
            {isGameOver ? "Chơi Ván Mới" : "Chơi Lại"}
          </Button>

          <Row gutter={[12, 12]}>
            {cards.map((card) => (
              <Col span={6} key={card.id}>
                <CardComponent card={card} handleCardClick={handleCardClick} />
              </Col>
            ))}
          </Row>
        </Space>
      </Content>
    </AntLayout>
  );
};

export default MemoryGame;
