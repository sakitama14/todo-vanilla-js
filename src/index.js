import "./styles.css";

const onClickbtn = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //devタグの子要素に各要素を設定
  div.appendChild(li);
  console.log(div);

  //未完了リストに入力したものを追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-text")
  .addEventListener("click", () => onClickbtn());
