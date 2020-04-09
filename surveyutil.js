
function openSurvey(moduleName, templateId) {

    var d = document.createElement("div");

    //create input element
    var likeR = document.createElement("input");
    likeR.type = "radio";
    likeR.name = "like";
    likeR.value = "like";
    d.appendChild(likeR);

    var likeL = document.createElement("LABEL");
    likeL.for = 'like';
    d.appendChild(likeL)

    var disLikeR = document.createElement("input");
    disLikeR.type = "radio";
    disLikeR.name = "like";
    disLikeR.value = "disLike";
    d.appendChild(disLikeR);

    var disLikeL = document.createElement("LABEL");
    disLikeL.for = 'disLike';
    d.appendChild(disLikeL)

    var br1 = document.createElement("BR");
    d.appendChild(br1);

    //create a checkbox
    var ta = document.createElement("TEXTAREA");
    ta.rows = 4;
    ta.id = "survey1";
    ta.name = "survey1";
    d.appendChild(ta);

    var br2 = document.createElement("BR");
    d.appendChild(br2);

    //create a button
    var s = document.createElement("input");
    s.type = "submit";
    s.value = "Submit";

    d.appendChild(s);

    // add the form inside the body
    // document.getElementsByTagName('body')[0].appendChild(d); 
    document.body.appendChild(d);


}

function handleSubmit(){
    // call wb survey api service
}


