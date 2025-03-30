async function search() {
  const query = document.getElementById("searchInput").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "搜索中...";

  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const filtered = data.filter(item => item.name.includes(query));
    
    if (filtered.length === 0) {
      result.innerHTML = "没有找到结果。";
      return;
    }

    result.innerHTML = filtered.map(item => `
      <div>
        <h3>${item.name}</h3>
        <p>番号: ${item.code}</p>
        <a href="${item.link}" target="_blank">前往地址</a>
      </div>
    `).join("<hr>");
  } catch (err) {
    result.innerHTML = "搜索失败，请稍后再试";
  }
}