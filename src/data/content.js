// Toàn bộ nội dung học thuật cho trình chiếu.
// Tách riêng để dễ chỉnh sửa mà không đụng vào giao diện.

export const META = {
  eyebrow: "Kinh tế chính trị Mác – Lênin",
  title: "Chủ nghĩa Tư bản\nĐộc quyền Nhà nước",
  subtitle:
    "Giải mã vòng lặp “Tội phạm – Đặc xá” của giới tài phiệt Hàn Quốc (Chaebol)",
  lead:
    "Vì sao mỗi khi kinh tế lâm nguy, các ông chủ tập đoàn lại được trả tự do để “cứu đất nước”? Đây là sự yếu kém của pháp luật, hay là một tính quy luật?",
  group: "Bài thuyết trình nhóm · G5",
};

// Menu thanh ngang trên cùng
export const NAV = [
  { id: "hero", label: "Khai mạc" },
  { id: "ly-thuyet", label: "Lý thuyết" },
  { id: "thuc-tien", label: "Thực tiễn" },
  { id: "he-qua", label: "Hệ quả" },
  { id: "ban-do", label: "Bản đồ Chaebol" },
  { id: "dong-thoi-gian", label: "Dòng thời gian" },
  { id: "tong-ket", label: "Video" },
  { id: "quiz", label: "Trắc nghiệm" },
];

export const SECTIONS = [
  { id: "ly-thuyet", index: "01", label: "Giải mã lý thuyết" },
  { id: "thuc-tien", index: "02", label: "Phân tích thực tiễn" },
  { id: "he-qua", index: "03", label: "Hệ quả thỏa hiệp" },
  { id: "luan-de", index: "04", label: "Luận đề trung tâm" },
  { id: "ban-do", index: "05", label: "Bản đồ Chaebol" },
  { id: "vong-lap", index: "06", label: "Vòng lặp quyền lực" },
  { id: "dong-thoi-gian", index: "07", label: "Dòng thời gian" },
  { id: "tong-ket", index: "08", label: "Tổng kết & Video" },
  { id: "quiz", index: "09", label: "Trắc nghiệm" },
  { id: "qr", index: "10", label: "Trải nghiệm thêm" },
];

// PHẦN 1 — Lý thuyết Lênin
export const PART1 = {
  kicker: "Phần 1",
  title: "Giải mã bằng lý thuyết",
  heading: "Chủ nghĩa tư bản độc quyền nhà nước",
  intro:
    "Để hiểu các lệnh đặc xá, ta không thể chỉ nhìn ở góc độ pháp lý, mà phải nhìn vào bản chất quan hệ giữa Nhà nước và Tư bản. Theo V.I. Lênin, khi chủ nghĩa tư bản phát triển đến tột cùng, nó chuyển sang Chủ nghĩa tư bản độc quyền nhà nước — sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản thành một cơ chế thống nhất.",
  features: [
    {
      no: "I",
      title: "Nhà nước không còn là trọng tài độc lập",
      body:
        "Nhà nước trở thành một bộ phận can thiệp trực tiếp vào kinh tế, dùng bộ máy pháp lý và hành chính để bảo vệ lợi ích cho các tập đoàn độc quyền.",
    },
    {
      no: "II",
      title: "Sự dung hợp nhân sự và lợi ích",
      body:
        "Những người đứng đầu tập đoàn và bộ máy nhà nước có sự đan xen về lợi ích. Sự ổn định của các tập đoàn được đồng nhất với sự ổn định của quốc gia.",
    },
    {
      no: "III",
      title: "Pháp luật phục vụ cho tuần hoàn tư bản",
      body:
        "Khi quy định pháp luật cản trở sự vận động của dòng vốn lớn, nhà nước sẽ điều chỉnh hoặc nới lỏng (qua đặc xá) để duy trì sự sinh lời của tư bản độc quyền.",
    },
  ],
  conclusion:
    "Các lệnh ân xá không phải là sự yếu kém của pháp luật, mà chính là tính quy luật của chủ nghĩa tư bản độc quyền nhà nước. Đó là một công cụ chính trị để giải cứu tư bản.",
};

// PHẦN 2 — Thực tiễn
export const PART2 = {
  kicker: "Phần 2",
  title: "Phân tích thực tiễn",
  heading: "Vì sao Nhà nước phải dựa vào Tư bản để phục hồi kinh tế?",
  intro:
    "Tại sao Hàn Quốc chọn thỏa hiệp thay vì trừng phạt triệt để? Câu trả lời nằm ở cấu trúc một nền kinh tế bị “bắt làm con tin”.",
  blocks: [
    {
      no: "1",
      title: "Nền kinh tế siêu tập trung",
      sub: "Sức nặng của các Chaebol",
      body:
        "Hàn Quốc là nền kinh tế định hướng xuất khẩu. Top 10 Chaebol hàng đầu chiếm khoảng 60–70% GDP cả nước. Khi Samsung hay Hyundai “hắt hơi”, cả nền kinh tế sẽ “cảm lạnh”. Họ nắm những mắt xích sống còn trong chuỗi cung ứng toàn cầu: bán dẫn, đóng tàu, ô tô.",
    },
    {
      no: "2",
      title: "Tê liệt quyết định đầu tư",
      sub: "Khoảng trống quyền lực",
      body:
        "Quản trị Chaebol mang tính gia đình trị cao. Các quyết định chiến lược — đầu tư nhà máy tỷ đô, M&A, định hướng công nghệ — chỉ được quyết bởi “Thái tử” hoặc Chủ tịch gia tộc. Khi lãnh đạo ngồi tù, ban giám đốc có xu hướng an toàn, đình chỉ dự án rủi ro; dòng vốn bị đóng băng đúng lúc khủng hoảng cần được bơm tiền.",
    },
    {
      no: "3",
      title: "Bản hợp đồng trao đổi không lời",
      sub: "Quỹ đạo cộng sinh",
      body:
        "Đặc xá bản chất là một cuộc đổi chác kinh tế – chính trị. Nhà nước trao trả tự do; đổi lại, Chaebol cam kết tung ra các gói đầu tư khổng lồ, tạo hàng chục ngàn việc làm. Tổng thống cần thành tích kinh tế để giữ uy tín; tài phiệt cần quyền lực để tiếp tục kiếm tiền.",
    },
  ],
  stats: [
    { value: 70, suffix: "%", label: "GDP do Top 10 Chaebol tạo ra", note: "ước tính 60–70%" },
    { value: 20, suffix: "%", label: "GDP riêng tập đoàn Samsung", note: "~ 1/5 nền kinh tế" },
    { value: 10, suffix: "", label: "đại tập đoàn chi phối quốc gia", note: "gia đình trị" },
  ],
};

// PHẦN 3 — Hệ quả
export const PART3 = {
  kicker: "Phần 3",
  title: "Hệ quả của sự thỏa hiệp",
  heading: "Di chứng đối với kinh tế & xã hội",
  intro:
    "Dùng luật pháp làm công cụ điều tiết kinh tế để lại những di chứng nặng nề cho xã hội Hàn Quốc.",
  cards: [
    {
      tag: "Kinh tế",
      title: "Hiện tượng “Korea Discount”",
      body:
        "Dù doanh nghiệp Hàn Quốc rất mạnh, cổ phiếu của họ thường bị định giá thấp hơn đối thủ quốc tế. Nhà đầu tư nước ngoài e ngại sự thiếu minh bạch, rủi ro đạo đức và quyền lực không thể kiểm soát của các gia tộc trị.",
    },
    {
      tag: "Kinh tế",
      title: "SMEs bị bóp nghẹt",
      body:
        "Doanh nghiệp vừa và nhỏ khó cạnh tranh vươn lên, vì nguồn lực quốc gia đã ưu tiên gần hết cho Chaebol — triệt tiêu động lực đổi mới của phần còn lại.",
    },
    {
      tag: "Xã hội",
      title: "Xói mòn niềm tin vào công lý",
      body:
        "Người Hàn có câu “Hữu tiền vô tội, Vô tiền hữu tội”. Đặc xá liên tục gửi đi thông điệp độc hại: đủ giàu và đủ quan trọng thì pháp luật sẽ chừa bạn ra.",
    },
    {
      tag: "Xã hội",
      title: "Bất bình đẳng & tỷ lệ sinh",
      body:
        "Khoảng cách giàu nghèo gia tăng; thế hệ trẻ tuyệt vọng vì thiếu cơ hội di động xã hội, dẫn tới hệ lụy như tỷ lệ sinh giảm thấp kỷ lục.",
    },
  ],
  quote: {
    text: "Hữu tiền vô tội, Vô tiền hữu tội.",
    source: "Ngạn ngữ phản ánh tâm lý xã hội Hàn Quốc",
  },
};

// PHẦN 4 — Luận đề trung tâm (nền video chạy phía sau)
export const THESIS = {
  ambientLabel: "Ambient Visual / Luận đề trung tâm",
  // Nền động cho mục này. Mặc định dùng ẢNH (hiệu ứng Ken Burns) cho nhẹ & mượt.
  // Nếu có một clip .mp4 NGẮN & NHẸ, dán đường dẫn vào bgVideo để dùng video nền.
  bgImage: "/img/skyline2.jpg",
  bgVideo: "",
  title: "Khi công lý nhường chỗ\ncho dòng chảy của đồng tiền",
  lead:
    "Đặc xá không phải là tai nạn của hệ thống pháp luật — đó là tính quy luật của chủ nghĩa tư bản độc quyền nhà nước.",
  cards: {
    main: {
      label: "Luận điểm chính",
      body:
        "Trong chủ nghĩa tư bản độc quyền nhà nước, bộ máy nhà nước và các tổ chức độc quyền tư nhân dung hợp làm một. Khi pháp quyền cản trở dòng vốn lớn, hệ thống có xu hướng để pháp quyền “lùi lại một bước” nhằm duy trì sự sinh lời của tư bản.",
    },
    quote: {
      label: "Trích dẫn liên hệ",
      text:
        "“Nếu pháp luật chỉ nghiêm với người yếu thế mà khoan dung với kẻ mạnh, thì công bằng cũng chẳng còn ý nghĩa gì.”",
      source: "Diễn giải tinh thần câu “Hữu tiền vô tội, Vô tiền hữu tội”.",
    },
    explain: {
      label: "Giải thích",
      body:
        "Bản án vẫn được tuyên để giữ thể diện pháp lý, nhưng đặc xá mở cửa phòng giam để dòng vốn không đứt gãy. Nhà nước đổi sự khoan hồng lấy cam kết đầu tư và việc làm từ Chaebol — một cuộc đổi chác kinh tế – chính trị.",
    },
    basis: {
      label: "Căn cứ lý luận",
      body:
        "Dựa trên học thuyết của V.I. Lênin về chủ nghĩa tư bản độc quyền nhà nước: sự kết hợp sức mạnh của tổ chức độc quyền tư nhân với nhà nước tư sản thành một cơ chế thống nhất.",
    },
    refs: {
      label: "Tài liệu tham khảo",
      items: [
        "V.I. Lênin – Chủ nghĩa đế quốc, giai đoạn tột cùng của CNTB",
        "Giáo trình Kinh tế chính trị Mác – Lênin",
        "Báo cáo về Chaebol & các lệnh đặc xá tại Hàn Quốc",
      ],
    },
  },
};

// PHẦN 5 — Bản đồ Chaebol Hàn Quốc (tương tác)
// Toạ độ x,y theo viewBox 0–1024 của bản đồ Hàn Quốc.
export const MAP = {
  kicker: "Phần 5 · Bản đồ tương tác",
  title: "Các Chaebol trên bản đồ Hàn Quốc",
  intro:
    "Các đại tập đoàn nằm rải rác khắp Hàn Quốc, tập trung quanh Seoul và vùng công nghiệp Đông Nam. Bấm vào từng điểm sáng để xem thông tin tập đoàn.",
  hint: "Di chuột để xem nhanh · Bấm để mở hồ sơ tập đoàn",
};

export const CHAEBOLS = [
  {
    id: "samsung",
    name: "Samsung",
    color: "#3aa3ff",
    x: 470,
    y: 352,
    city: "Seoul · Suwon",
    founded: "1938",
    sector: "Bán dẫn, điện tử, đóng tàu, bảo hiểm",
    leader: "Lee Jae-yong (Phó Chủ tịch)",
    weight: "≈ 20% GDP Hàn Quốc",
    image: "/img/samsung.jpg",
    info:
      "Tập đoàn lớn nhất Hàn Quốc, trụ cột ngành bán dẫn toàn cầu. Sức nặng của Samsung lớn đến mức quyết định đầu tư của tập đoàn được xem như chỉ dấu sức khỏe nền kinh tế.",
    amnesty:
      "Phó Chủ tịch Lee Jae-yong bị kết án trong bê bối chính trị (2017), rồi được đặc xá năm 2022 — đúng thời điểm Hàn Quốc cần thúc đẩy ngành bán dẫn.",
  },
  {
    id: "sk",
    name: "SK Group",
    color: "#ff6a3d",
    x: 506,
    y: 312,
    city: "Seoul",
    founded: "1953",
    sector: "Bán dẫn (SK Hynix), năng lượng, viễn thông",
    leader: "Chey Tae-won (Chủ tịch)",
    weight: "Top 3 Chaebol",
    image: "/img/sk.jpg",
    info:
      "Tập đoàn lớn thứ hai–ba, sở hữu SK Hynix — nhà sản xuất chip nhớ hàng đầu thế giới, mắt xích sống còn của chuỗi cung ứng bán dẫn.",
    amnesty:
      "Chủ tịch Chey Tae-won bị kết án (2013) vì biển thủ, được đặc xá năm 2015 để “đóng góp cho kinh tế”.",
  },
  {
    id: "lg",
    name: "LG",
    color: "#e64a6b",
    x: 408,
    y: 322,
    city: "Seoul (Yeouido)",
    founded: "1947",
    sector: "Điện tử, hóa chất, pin EV",
    leader: "Koo Kwang-mo (Chủ tịch)",
    weight: "Top 4 Chaebol",
    image: "/img/lg.jpg",
    info:
      "Tập đoàn điện tử – hóa chất lớn, dẫn đầu mảng pin xe điện (LG Energy Solution) và màn hình. Đặt đại bản doanh tại khu tài chính Yeouido, Seoul.",
    amnesty:
      "LG thường được nhắc đến như tập đoàn quản trị “sạch” hơn, ít dính các vụ án hình sự lớn so với mặt bằng chung Chaebol.",
  },
  {
    id: "lotte",
    name: "Lotte",
    color: "#d11f2a",
    x: 522,
    y: 338,
    city: "Seoul (Jamsil)",
    founded: "1948",
    sector: "Bán lẻ, thực phẩm, hóa dầu, bất động sản",
    leader: "Shin Dong-bin (Chủ tịch)",
    weight: "Top 5 Chaebol",
    image: "/img/lotte.jpg",
    info:
      "Đế chế bán lẻ – tiêu dùng với biểu tượng Lotte World Tower (123 tầng) tại Seoul. Cấu trúc sở hữu chéo phức tạp giữa Hàn Quốc và Nhật Bản.",
    amnesty:
      "Chủ tịch Shin Dong-bin bị kết án trong bê bối Park Geun-hye (2018), được đặc xá năm 2022 cùng đợt với lãnh đạo Samsung.",
  },
  {
    id: "posco",
    name: "POSCO",
    color: "#4ad0c0",
    x: 678,
    y: 540,
    city: "Pohang",
    founded: "1968",
    sector: "Thép, vật liệu, pin",
    leader: "Chang In-hwa (Chủ tịch)",
    weight: "Nhà sản xuất thép hàng đầu",
    image: "/img/posco.jpg",
    info:
      "Khởi đầu là doanh nghiệp thép quốc doanh – biểu tượng của công nghiệp hóa “Kỳ tích sông Hàn”, nay là tập đoàn thép – vật liệu pin toàn cầu, đặt tại Pohang.",
    amnesty:
      "Lịch sử POSCO gắn liền với vai trò bệ đỡ của nhà nước cho công nghiệp nặng trong giai đoạn cất cánh.",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    color: "#5ab0ff",
    x: 666,
    y: 624,
    city: "Ulsan",
    founded: "1967",
    sector: "Ô tô, đóng tàu, xây dựng, thép",
    leader: "Chung Euisun (Chủ tịch)",
    weight: "Top 2 Chaebol",
    image: "/img/hyundai.jpg",
    info:
      "Đế chế ô tô – công nghiệp nặng với tổ hợp nhà máy khổng lồ ở Ulsan, gồm xưởng đóng tàu lớn bậc nhất thế giới (Hyundai Heavy Industries).",
    amnesty:
      "Chủ tịch Chung Mong-koo bị kết án (2007) vì biển thủ – lập quỹ đen, nhưng được đặc xá năm 2008.",
  },
];

// PHẦN 6 — Vòng lặp quyền lực (interactive)
export const LOOP = {
  kicker: "Phần 6",
  title: "Vòng lặp Quyền lực – Tiền bạc – Pháp lý",
  intro:
    "Bấm vào từng mắt xích để thấy cách kiến trúc của công lý phải nhường chỗ cho dòng chảy của đồng tiền.",
  nodes: [
    {
      id: "nha-nuoc",
      label: "Nhà nước / Tổng thống",
      short: "Cần thành tích kinh tế & uy tín chính trị.",
      detail:
        "Nhà nước không còn là trọng tài độc lập. Tổng thống cần GDP tăng trưởng và việc làm để giữ uy tín, nên sẵn sàng dùng quyền đặc xá như một công cụ chính sách.",
    },
    {
      id: "tai-phiet",
      label: "Tài phiệt (Chaebol)",
      short: "Nắm 60–70% GDP, cần quyền lực để kiếm tiền.",
      detail:
        "Gia tộc trị nắm các quyết định đầu tư tỷ đô. Khi được tự do, họ cam kết bơm vốn, mở nhà máy, tạo việc làm — đổi lấy sự khoan hồng của pháp luật.",
    },
    {
      id: "phap-luat",
      label: "Pháp luật",
      short: "Bị điều chỉnh, nới lỏng qua đặc xá.",
      detail:
        "Khi quy định cản trở dòng vốn lớn, pháp quyền “lùi lại một bước”. Bản án vẫn tuyên, nhưng đặc xá mở cửa phòng giam để tuần hoàn tư bản không đứt gãy.",
    },
    {
      id: "kinh-te",
      label: "Kinh tế / GDP",
      short: "Ổn định ngắn hạn, tổn thương dài hạn.",
      detail:
        "Vòng lặp mang lại tăng trưởng và ổn định trong ngắn hạn, nhưng khoét sâu bất bình đẳng, “Korea Discount” và sự xói mòn niềm tin trong dài hạn.",
    },
  ],
};

// PHẦN 7 — Dòng thời gian Chaebol & các lệnh đặc xá
export const TIMELINE = {
  kicker: "Phần 7 · Dòng thời gian",
  title: "Các giai đoạn & sự kiện của giới Chaebol",
  intro:
    "Hành trình từ buổi sơ khai, “Kỳ tích sông Hàn”, cho tới chuỗi “Tội phạm – Đặc xá” lặp đi lặp lại.",
  milestones: [
    {
      year: "1938",
      title: "Khởi nguồn các Chaebol",
      place: "Daegu / Seoul",
      image: "/img/samsung.jpg",
      desc:
        "Samsung (1938), LG (1947), Lotte (1948), SK (1953) lần lượt ra đời — đặt nền móng cho các đế chế gia đình trị.",
      quote: "“Từ những cửa hàng nhỏ, các đế chế kinh tế bắt đầu hình thành.”",
    },
    {
      year: "1960–70s",
      title: "Kỳ tích sông Hàn",
      place: "Ulsan · Pohang",
      image: "/img/industry.jpg",
      desc:
        "Nhà nước chọn nâng đỡ một số tập đoàn làm “đầu tàu” công nghiệp hóa: thép (POSCO), đóng tàu, ô tô (Hyundai). Quan hệ nhà nước – tư bản gắn bó từ đây.",
      quote: "“Nhà nước và tư bản cùng nhau dựng nên một nền công nghiệp.”",
    },
    {
      year: "1997",
      title: "Khủng hoảng tài chính (IMF)",
      place: "Toàn Hàn Quốc",
      image: "/img/won.jpg",
      desc:
        "Khủng hoảng tài chính châu Á phơi bày rủi ro của mô hình Chaebol vay nợ cao, nhưng cũng khiến nhà nước càng phụ thuộc vào các tập đoàn để phục hồi.",
      quote: "“Khi nền kinh tế lung lay, tư bản độc quyền càng trở nên thiết yếu.”",
    },
    {
      year: "2008",
      title: "Đặc xá Chủ tịch Hyundai & Samsung",
      place: "Phủ Tổng thống",
      image: "/img/court.jpg",
      desc:
        "Chủ tịch Hyundai (Chung Mong-koo) và sau đó lãnh đạo Samsung được khoan hồng dù bị kết án — mở đầu cho “tiền lệ đặc xá” cấp cao.",
      quote: "“Bản án được tuyên, nhưng cánh cửa phòng giam sớm mở.”",
    },
    {
      year: "2017",
      title: "Lee Jae-yong bị bắt",
      place: "Tòa án Seoul",
      image: "/img/assembly.jpg",
      desc:
        "Phó Chủ tịch Samsung bị bắt trong đại án chính trị làm rung chuyển Hàn Quốc, dẫn tới việc phế truất Tổng thống Park Geun-hye.",
      quote: "“Quyền lực tư bản và quyền lực chính trị đan xen tới mức khó tách rời.”",
    },
    {
      year: "2022",
      title: "Đặc xá để “cứu kinh tế”",
      place: "Seoul",
      image: "/img/seoul.jpg",
      desc:
        "Lee Jae-yong (Samsung) và Shin Dong-bin (Lotte) được đặc xá, với lý do thúc đẩy đầu tư bán dẫn và vượt qua khó khăn kinh tế.",
      quote: "“Tự do đổi lấy cam kết đầu tư — một cuộc đổi chác không lời.”",
    },
    {
      year: "Hiện nay",
      title: "“Korea Discount” & sức ép cải cách",
      place: "Thị trường tài chính",
      image: "/img/skyline2.jpg",
      desc:
        "Di chứng để lại: cổ phiếu bị định giá thấp, bất bình đẳng gia tăng, niềm tin vào công lý bị xói mòn — đặt ra yêu cầu cải cách quản trị Chaebol.",
      quote: "“Ổn định ngắn hạn, nhưng vết thương xã hội kéo dài.”",
    },
  ],
};

// PHẦN 8 — Tổng kết
export const SUMMARY = {
  kicker: "Tổng kết & Dẫn nhập",
  title: "Khi công lý nhường chỗ cho đồng tiền",
  body: [
    "Nhìn lại toàn bộ bức tranh, việc Chính phủ Hàn Quốc ân xá cho các nhà tài phiệt không phải là một tai nạn của hệ thống pháp luật, mà là bản chất cốt lõi của Chủ nghĩa tư bản độc quyền nhà nước.",
    "Khi đứng trước lằn ranh giữa duy trì công bằng tuyệt đối của hiến pháp và giữ cho dòng chảy tư bản không đứt gãy, hệ thống luôn có xu hướng để pháp quyền lùi lại một bước. Nó mang lại ổn định và tăng trưởng GDP ngắn hạn, nhưng khoét sâu vết thương bất bình đẳng và niềm tin xã hội dài hạn.",
  ],
  videoNote:
    "Đoạn video ngắn sau đây tóm tắt trọn vẹn vòng lặp quyền lực, tiền bạc và pháp lý — nơi kiến trúc của công lý phải nhường chỗ cho dòng chảy của đồng tiền.",
  // Video sản phẩm của nhóm (đặt trong public/media). Có thể thay bằng link .mp4 khác.
  videoUrl: "/media/san-pham.mp4",
};

// PHẦN 10 — QR trải nghiệm thêm
export const EXTRA = {
  kicker: "Trải nghiệm thêm",
  title: "Quét mã để khám phá thêm",
  desc:
    "Dùng camera điện thoại quét mã QR bên dưới để mở phiên bản web tương tác và tài liệu mở rộng của nhóm.",
  // ⚠️ Thay bằng link thật của nhóm (web đã deploy / Google Drive / Form khảo sát…)
  qrUrl: "https://mln-222.vercel.app/",
  qrCaption: "mln-222.vercel.app",
};

export const CREDITS = {
  note:
    "Các công cụ được sử dụng để hỗ trợ lên ý tưởng, biên tập nội dung, tạo tư liệu hình ảnh, video minh họa và tham khảo nguồn thông tin chính thống cho bài thuyết trình. Hình ảnh tư liệu: Wikimedia Commons.",
  group: "Nhóm G5 · Kinh tế chính trị Mác – Lênin",
};
