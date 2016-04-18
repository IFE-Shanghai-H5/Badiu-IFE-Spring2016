/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {},
    cityElement = document.getElementById("aqi-city-input"),
    valueElement = document.getElementById("aqi-value-input"),
    tableElement = document.getElementById("aqi-table"),
    btnElement = document.getElementById("add-btn");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityValue = cityElement.value.trim();
    var valueValue = valueElement.value.trim();
    aqiData[cityValue] = valueValue;
    //校验数据。。。未做
    // console.log("123");
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var nodeHtml = [];
    // var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    var header = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    nodeHtml.push(header);
    for (var city in aqiData) {//遍历对象
        // 01  items += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button onclick=delBtnHandle('" + city + "')>删除</button></td></tr>";
         nodeHtml.push("<tr>");
         nodeHtml.push("<td>" + city + "</td>");
         nodeHtml.push("<td>" + aqiData[city] + "</td>");
        //  nodeHtml.push("<td><button onclick=delBtnHandle('" + city + "')>删除</button></td>");
         nodeHtml.push("<td><button data-city=" + city + ">删除</button></td>");
         nodeHtml.push("</tr>");
         tableElement.innerHTML = nodeHtml.join("");//指定空格为分隔符
    }
    // tableElement.innerHTML = items;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

// function delBtnHandle() {
//     // do sth.
//     delete aqiData[city];
//     renderAqiList();
// }

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    btnElement.addEventListener("click", addBtnHandle);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    tableElement.addEventListener("click",function(event){
        if (event.target.nodeName.toLowerCase()==="button") {
            delBtnHandle.call(this,event.target.dataset.city);
        }
    });
}

init();