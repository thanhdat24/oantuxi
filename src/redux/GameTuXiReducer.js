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
    default:
      return { ...state };
  }
};

export default GameTuXiReducer;
