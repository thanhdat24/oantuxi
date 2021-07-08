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
  ketQua: "I'm iron man, i love you 3000 !!!",
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

    default:
      return { ...state };
  }
};

export default GameTuXiReducer;
