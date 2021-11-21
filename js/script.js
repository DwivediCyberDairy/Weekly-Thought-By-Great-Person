/*Date function start */
function showTime() {
    var t, sp, dt;
    sp = document.getElementById("sptime");
    dt = new Date();
    t = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    sp.innerHTML = t;
    window.setTimeout("showTime()", 1000);
}

/*Date function End */

/*dayThought function start */

function addday(l) {
    l = l.substring(0, 1);
    switch (l) {
        case 'M':
            var Images = ["mg1", "mg2", "mg3", "mg4", "mg5", "mg6", "mg7"];

            function addimg() {
                var myimg = document.getElementById("imgslider");
                myimg.src = "images/" + Images[0] + ".jpg";
            }
            addimg();
            break;
        case 'S':
            var Images = ["s1", "s2", "s3", "s4", "s5", "s6,", "s7"];

            function addimg() {
                var myimg = document.getElementById("imgslider");
                myimg.src = "images/" + Images[0] + ".jpg";
            }
            addimg();
            break;
        case 'A':
            var Images = ["apj1", "apj2", "apj3", "apj4", "apj5", "apj6", "apj7"];

            function addimg() {
                var myimg = document.getElementById("imgslider");
                myimg.src = "images/" + Images[0] + ".jpg";
            }
            addimg();
            break;
        case 'T':
            var Images = ["tha1", "tha2", "tha3", "tha4", "tha5", "tha6", "tha7"];

            function addimg() {
                var myimg = document.getElementById("imgslider");
                myimg.src = "images/" + Images[0] + ".jpg";
            }
            addimg();
            break;
        case 'E':
            var Images = ["al1", "al2", "al3", "al4", "al5", "al6", "al7"];

            function addimg() {
                var myimg = document.getElementById("imgslider");
                myimg.src = "images/" + Images[0] + ".jpg";
            }
            addimg();
            break;
    }
    var ddl = document.getElementById("ddlday");
    var items = "";
    var arr = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    for (x = 0; x <= 6; x++) {
        items = items + "<option value=" + l + x + ">" + arr[x] + "</option>";
    }
    ddl.innerHTML = items;
}

function changeimg(d) {
    var n = d.substring(0, 1);
    var dn = d.substring(1, 2);
    if (n == 'M') { var Images = ["mg1", "mg2", "mg3", "mg4", "mg5", "mg6", "mg7"] };
    if (n == 'S') { var Images = ["s1", "s2", "s3", "s4", "s5", "s6,", "s7"] };
    if (n == 'A') { var Images = ["apj1", "apj2", "apj3", "apj4", "apj5", "apj6", "apj7"] };
    if (n == 'T') { var Images = ["tha1", "tha2", "tha3", "tha4", "tha5", "tha6", "tha7"] };
    if (n == 'E') { var Images = ["al1", "al2", "al3", "al4", "al5", "al6", "al7"] };
    var myimg = document.getElementById("imgslider");
    myimg.src = "images/" + Images[dn] + ".jpg";
}
/*dayThought function End */