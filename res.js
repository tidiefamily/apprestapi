"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };
  res.json(data);
  res.end();
};

//response untuk nasted matakuliah
exports.oknested = function (values, res) {
  //lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    //tentukan key group
    if (akumulasikan[item.nama]) {
      //buat variable group nama mahasiswa
      const group = akumulasikan[item.nama];
      //cek jika isi array adalah matakulia
      if (Array.isArray(group.matakuliah)) {
        //tambahkan value ke dalam group matakuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});
  var data = {
    status: 200,
    values: hasil,
  };
  res.json(data);
  res.end();
};
