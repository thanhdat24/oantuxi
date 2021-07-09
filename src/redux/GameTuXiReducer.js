const stateDefault = {
  mangTuXi: [
    {
      ma: "keo",
      hinhAnh: "./images/keo.png",
      status: true,
    },
    {
      ma: "bua",
      hinhAnh: "./images/bua.png",
      status: false,
    },
    {
      ma: "bao",
      hinhAnh: "./images/bao.png",
      status: false,
    },
  ],
  ketQua: "you win!!",
  soBanThang: 0,
  soBanChoi: 0,
  mangComputer: {
    ma: "bua",
    hinhAnh: "./images/bua.png",
    status: false,
  },
};

const GameTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangTuXiUpdate = [...state.mangTuXi];
      mangTuXiUpdate = mangTuXiUpdate.map((item, index) => {
        // Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyên lên
        if (item.ma === action.maCuoc) {
          return { ...item, status: true };
        }
        return { ...item, status: false };
      });
      state.mangTuXi = mangTuXiUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);

      let quanCuocNgauNhien = state.mangTuXi[soNgauNhien];
      state.mangComputer = quanCuocNgauNhien;
      return { ...state };
    }

    case "KET_QUA":
      let player = state.mangTuXi.find((item) => item.status);
      let computer = state.mangComputer;
      state.soBanChoi++;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") state.ketQua = "you draw!!";
          else if (computer.ma === "bua") state.ketQua = "you lost!!";
          else {
            state.ketQua = "you win!!";
            state.soBanThang++;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "you win!!";
            state.soBanThang++;
          } else if (computer.ma === "bua") state.ketQua = "you draw!!";
          else state.ketQua = "you lost!!";
          break;
        case "bao":
          if (computer.ma === "keo") state.ketQua = "you lost!!";
          else if (computer.ma === "bua") {
            state.ketQua = "you win!!";
            state.soBanThang++;
          } else state.ketQua = "you draw!!";
          break;
        default:
          state.ketQua = "you win!!";
          state.soBanThang++;
          return { ...state };
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default GameTuXiReducer;
