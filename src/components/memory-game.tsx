"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
// Sử dụng Ant Design cho UI
import {
  Layout as AntLayout,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Button,
} from "antd";
// Thêm SweetAlert2 cho thông báo chiến thắng
import Swal from "sweetalert2";

// Define types
interface CardType {
  id: number;
  name: string;
  content: string;
  matchContent: string;
  isFlipped: boolean;
  isMatched: boolean;
  colorGroup:
    | "brown"
    | "blue"
    | "orange"
    | "deepPink"
    | "green"
    | "black"
    | "purple"
    | "yellow";
}

interface CardComponentProps {
  card: CardType;
  handleCardClick: (id: number) => void;
  isReviewMode: boolean;
}

interface ColorScheme {
  background: string;
  border: string;
  text: string;
}

interface MatchColors {
  [key: string]: ColorScheme;
}
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const { Content } = AntLayout;
const { Title } = Typography;

// --- Dữ liệu Card (8 cặp, tổng cộng 16 thẻ) ---
const newCardData: CardType[] = [
  // Cặp 1: Định nghĩa Dân chủ (Aqua)
  {
    id: 1,
    name: "Def_1",
    content: "Nền dân chủ mà quyền lực thuộc về nhân dân",
    matchContent: "Dân chủ xã hội chủ nghĩa",
    isFlipped: false,
    isMatched: false,
    colorGroup: "brown",
  },
  {
    id: 2,
    name: "Def_1_Match",
    content: "Dân chủ xã hội chủ nghĩa",
    matchContent: "Nền dân chủ mà quyền lực thuộc về nhân dân",
    isFlipped: false,
    isMatched: false,
    colorGroup: "brown",
  },
  // Cặp 2: Yếu tố bảo đảm (Xanh lá cây)
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
  // Cặp 3: Công cụ thực hiện (Cam)
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
  // Cặp 4: Giai cấp lãnh đạo (Đỏ)
  {
    id: 7,
    name: "GiaiCap_4",
    content: "Giai cấp giữ vai trò lãnh đạo chính trị trong dân chủ XHCN",
    matchContent: "Giai cấp công nhân",
    isFlipped: false,
    isMatched: false,
    colorGroup: "deepPink",
  },
  {
    id: 8,
    name: "GiaiCap_4_Match",
    content: "Giai cấp công nhân",
    matchContent: "Giai cấp giữ vai trò lãnh đạo chính trị trong dân chủ XHCN",
    isFlipped: false,
    isMatched: false,
    colorGroup: "deepPink",
  },
  // Cặp 5: Tôn trọng Con người (Xanh dương)
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
  // Cặp 6: Bản chất (Vàng)
  {
    id: 11,
    name: "BanChat_6",
    content: "Bản chất dân chủ XHCN Việt Nam thể hiện ở",
    matchContent: "Dân là gốc, vừa là mục tiêu vừa là động lực phát triển",
    isFlipped: false,
    isMatched: false,
    colorGroup: "yellow",
  },
  {
    id: 12,
    name: "BanChat_6_Match",
    content: "Dân là gốc, vừa là mục tiêu vừa là động lực phát triển",
    matchContent: "Bản chất dân chủ XHCN Việt Nam thể hiện ở",
    isFlipped: false,
    isMatched: false,
    colorGroup: "yellow",
  },
  // Cặp 7: Thể chế hóa (Cyan/Turquoise)
  {
    id: 13,
    name: "TheChe_7",
    content: "Dân chủ XHCN được thể chế hóa bằng",
    matchContent: "Pháp luật, kỷ luật và kỷ cương",
    isFlipped: false,
    isMatched: false,
    colorGroup: "purple",
  },
  {
    id: 14,
    name: "TheChe_7_Match",
    content: "Pháp luật, kỷ luật và kỷ cương",
    matchContent: "Dân chủ XHCN được thể chế hóa bằng",
    isFlipped: false,
    isMatched: false,
    colorGroup: "purple",
  },
  // Cặp 8: Hình thức (Hồng)
  {
    id: 15,
    name: "HinhThuc_8",
    content: "Hai hình thức thực hiện dân chủ ở Việt Nam",
    matchContent: "Dân chủ trực tiếp và dân chủ gián tiếp",
    isFlipped: false,
    isMatched: false,
    colorGroup: "black",
  },
  {
    id: 16,
    name: "HinhThuc_8_Match",
    content: "Dân chủ trực tiếp và dân chủ gián tiếp",
    matchContent: "Hai hình thức thực hiện dân chủ ở Việt Nam",
    isFlipped: false,
    isMatched: false,
    colorGroup: "black",
  },
];

// Cập nhật bộ màu sắc để tương phản hơn
const matchColors = {
  brown: {
    // Nâu
    background: "#efebe9",
    border: "#8d6e63",
    text: "#4e342e",
  },
  blue: {
    // Xanh dương
    background: "#e3f2fd",
    border: "#1e88e5",
    text: "#1565c0",
  },
  orange: {
    // Cam
    background: "#fff3e0",
    border: "#fb8c00",
    text: "#ef6c00",
  },
  deepPink: {
    background: "#fce4ec",
    border: "#d81b60",
    text: "#880e4f", // Đổi màu chữ đậm hơn
  },
  green: {
    // Xanh lá cây
    background: "#e8f5e9",
    border: "#43a047",
    text: "#2e7d32",
  },
  black: {
    // Đen (thay thế đỏ)
    background: "#f5f5f5",
    border: "#212121",
    text: "#000000",
  },
  purple: {
    background: "#f3e5f5",
    border: "#8e24aa",
    text: "#4a148c",
  },
  yellow: {
    // Vàng
    background: "#fffde7",
    border: "#ffeb3b",
    text: "#f9a825",
  },
};

// Hàm trộn thẻ (Giữ nguyên)
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
  isReviewMode,
}) => {
  const isClickable = !card.isMatched && !isReviewMode;

  const cardContainerStyle: React.CSSProperties = {
    height: "150px",
    perspective: "1000px",
    // Chỉ cho phép click nếu không khớp và không ở chế độ xem lại
    cursor: isClickable ? "pointer" : "default",
    pointerEvents: isReviewMode ? "none" : ("auto" as const), // Vô hiệu hóa nhấp chuột trong chế độ xem lại
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

  const frontFaceStyle = {
    ...cardFaceStyle,
    backgroundColor: "#bae7ff", // Màu xanh mặc định mặt trước
  };

  const backFaceStyle = {
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

  // Điều chỉnh font size cho nội dung dài hơn
  const contentFontSize =
    card.content.length > 50
      ? "12px"
      : card.content.length > 30
      ? "14px"
      : "16px";

  return (
    <div
      style={cardContainerStyle}
      // Chỉ gọi handleCardClick nếu thẻ chưa khớp và không ở chế độ xem lại
      onClick={() => isClickable && handleCardClick(card.id)}
    >
      <div style={cardInnerStyle}>
        {/* MẶT TRƯỚC */}
        <Card bodyStyle={{ padding: 12 }} style={frontFaceStyle}>
          <Title level={3}>?</Title>
        </Card>

        {/* MẶT SAU */}
        <Card bodyStyle={{ padding: 12 }} style={backFaceStyle}>
          <Typography.Text
            style={{
              fontSize: contentFontSize,
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            {card.content}
          </Typography.Text>
        </Card>
      </div>
    </div>
  );
};

const MemoryGameLayout: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(() =>
    shuffleCards(newCardData as CardType[])
  );
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Logic Timer ---
  useEffect(() => {
    if (startTime && !isGameOver && !isReviewMode) {
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
  }, [startTime, isGameOver, isReviewMode]);

  const resetGame = useCallback(() => {
    setLockBoard(false);
    setFlippedCards([]);
    setCards(shuffleCards(newCardData));
    setStartTime(null);
    setElapsedTime(0);
    setIsGameOver(false);
    setIsReviewMode(false);
  }, []);

  // ✅ Thêm hàm hoàn thành game để test
  const forceFinishGame = useCallback(() => {
    if (isGameOver || isReviewMode) return;

    // Đảm bảo tất cả thẻ được lật và khớp
    setCards((prevCards) =>
      prevCards.map((c) => ({
        ...c,
        isFlipped: true,
        isMatched: true,
      }))
    );
    setFlippedCards([]);
    setLockBoard(false);
    // Nếu timer chưa chạy, set startTime để elapsedTime tính toán được (nếu cần)
    if (startTime === null) {
      setStartTime(Date.now());
    }
    // useEffect kiểm tra `allMatched` sẽ tự kích hoạt popup
  }, [isGameOver, isReviewMode, startTime]);

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
      // Lật ngược sau 1.5 giây
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
      }, 1.5 * 1000);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (id: number): void => {
    if (lockBoard || flippedCards.includes(id) || isGameOver || isReviewMode)
      return;

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

  // --- Dừng Timer và Hiển thị SweetAlert2 ---
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
            <p>Bạn đã tìm thấy tất cả 8 cặp thẻ.</p>
            <Title level={4}>
              Thời gian:{" "}
              <span style={{ color: "#1890ff" }}>
                {formatTime(elapsedTime)}
              </span>
            </Title>
          </div>
        ),
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Chơi Lại",
        cancelButtonText: "Xem lại",
        confirmButtonColor: "#1890ff",
        cancelButtonColor: "#faad14",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          resetGame();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setIsReviewMode(true);
        }
      });
    }
  }, [cards, elapsedTime, isGameOver, resetGame]);

  // Định dạng hiển thị thời gian
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatted = [hours, minutes, seconds]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

    return hours > 0 ? formatted : formatted.substring(3);
  };

  return (
    <AntLayout
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      <Content style={{ maxWidth: "850px", margin: "0 auto", width: "100%" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          Trò chơi Lật Thẻ Nhớ: Dân Chủ XHCN
        </Title>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* HIỂN THỊ THỜI GIAN */}
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
          {/* NÚT THÊM MỚI: HOÀN THÀNH GAME ĐỂ TEST */}
          <Button
            onClick={forceFinishGame}
            style={{ width: "100%" }}
            disabled={isGameOver || isReviewMode}
          >
            [TEST] Hoàn thành Game Ngay lập tức
          </Button>

          <Button
            type="primary"
            onClick={resetGame}
            style={{ width: "100%" }}
            danger={isGameOver && !isReviewMode}
          >
            {isReviewMode
              ? "Bắt Đầu Ván Mới"
              : isGameOver
              ? "Chơi Ván Mới"
              : "Chơi Lại"}
          </Button>

          {/* Lưới 4x4 cho 16 thẻ */}
          <Row gutter={[12, 12]}>
            {cards.map((card) => (
              <Col span={6} key={card.id}>
                <CardComponent
                  card={card}
                  handleCardClick={handleCardClick}
                  isReviewMode={isReviewMode}
                />
              </Col>
            ))}
          </Row>
        </Space>
      </Content>
    </AntLayout>
  );
};

export default MemoryGameLayout;
