function changeMyemail(obj) {
	changeEmailfrm(obj.uemail, obj.uemail2, obj.wbMyemailDomainSel);	
}

function checkMyemailDomain(focus) {
	focusOff1(focus);
	obj.uemail2.value = trim(obj.uemail2.value.toLowerCase());
}

function changeEmailfrm(femailid, femaildomain, femaildomainsel)
{
	if (femaildomainsel.value == "") {
		femaildomain.readOnly = false;
		femaildomain.value = "";
		femailid.focus();
	}
	else 
	{
		femaildomain.readOnly = true;
		femaildomain.value = femaildomainsel.value;
	}
}

//오토데스크
function autodesk_send(obj,cnt){
	var flag = false;
	for(var nPos = 1; nPos <= cnt; nPos++){
		
		if (eval("document.frmMain.quantity"+nPos+".value") != 0)
		{
			flag=true;
		}

	}

	if(!flag){
		alert("제품 구매 수량을 입력하세요");
		return;	
	}

	if (obj.productTypeIdx(1).checked && obj.productup.value=="")
	{
		alert("업그레이드 버전/내용을 입력하세요");
		obj.productup.focus();
		return;	
	}


	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	
	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}


/*
	if(obj.hp.value == "" ){
		alert("이동전화번호를 입력하세요");
		obj.hp.focus();
		return;
	}


	if(obj.tel.value == "" ){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}


	if(obj.uemail.value == ""){
		alert("이메일(ID)을 입력하세요");
		obj.uemail.focus();
		return;
	}
	if(obj.uemail2.value == ""){
		alert("이메일(Domain)을  입력하세요");
		obj.uemail2.focus();
		return;
	}

	if(!checkSPemail(obj.uemail.value+'@'+obj.uemail2.value)){
		alert("이메일 주소가 잘못 되었습니다.");
		return;
	}

*/
	obj.action="purchase_ok.asp";
	obj.submit();

}

//마이크로소프트
function microsoft_send(obj,cnt){
	var flag = false;

	for(var nPos = 1; nPos <= cnt; nPos++){
		
		if (eval("document.frmMain.quantity"+nPos+".value") != 0)
		{
			flag=true;
		}

	}

	if(!flag && obj.productetc.value==""){
		alert("제품 구매 수량을 입력하세요");
		return;	
	}

	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	obj.action="purchase_ok.asp";
	obj.submit();

}


//마이크로소프트
function microsoft_send2(obj){
	var flag = false;

	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	obj.action="purchase_ok.asp";
	obj.submit();

}


//마이크로소프트
function microsoft_send2_kihf(obj){
	var flag = false;


	if(obj.copycnt.value == "" && obj.copycnt2.value == "" && obj.copycnt3.value == "" && obj.copycnt4.value == ""){
		alert("제품 수량을 선택하세요");
		return;
	}


	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.company.value == ""){
		alert("센터명(한글)을 선택하세요");
		obj.company.focus();
		return;
	}


	if(obj.company.value != "(재)한국건강가정진흥원"){
		if(obj.companyarea.value == ""){
			alert("센터 지역명을 입력하세요");
			obj.companyarea.focus();
			return;
		}
	}


	if(obj.engcompany.value == ""){
		alert("센터명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}

	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}


	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}

	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}

	if(!checkSPemail(obj.uemail.value)){
		alert("기관 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}
/*
	if(obj.uemail2.value == ""){
		alert("외부포털 이메일을 입력하세요");
		obj.uemail2.focus();
		return;
	}

	if(!checkSPemail(obj.uemail2.value)){
		alert("외부포털 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}
*/
	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("사업자등록증 주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	if(obj.strOfficeAddr2.value == ""){
		alert("제품수령 주소를 입력하세요");
		obj.strOfficeAddr2.focus();
		return;
	}


	if(obj.comreg1.value == ""){//1
		alert("사업자번호/고유번호 입력 해 주세요");
		obj.comreg1.focus();
		return;
	}

	if(obj.comreg2.value == ""){//2
		alert("사업자번호/고유번호 입력 해 주세요");
		obj.comreg2.focus();
		return;
	}

	if(obj.comreg3.value == ""){//3
		alert("사업자번호/고유번호 입력 해 주세요");
		obj.comreg3.focus();
		return;
	}


	obj.comreg.value = obj.comreg1.value + "-" +  obj.comreg2.value + "-" +  obj.comreg3.value

	var count = 0;
	var num=obj.payMethods.length

	for(i=0; i<num; i++)
	{
		if(obj.payMethods[i].checked == true)
	{
		count +=1;
	}
	}
	if(count==0)
	{
		alert("결제방식을 선택 해 주세요.");
	return;
	}


	if (obj.payMethods[0].checked==true)
	{
		obj.action="purchase.asp?product=kihf_ok&pdiv=kihf";
	}else{
		roadingimg.style.display=""; //로딩이미지
		obj.action="purchase.asp?product=kihf_bank&pdiv=kihf";
	}
	obj.submit();

}


//사회복지화 공동구매 1차 아이템1
function microsoft_send_swc_item_1(obj){
	var flag = false;


	if(obj.copycnt.value == "" && obj.copycnt2.value == "" ){
		alert("수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}

	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.company.value == ""){
		alert("복지관명(한글)을 선택하세요");
		obj.company.focus();
		return;
	}


	if(obj.engcompany.value == ""){
		alert("복지관명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}

	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}


	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}

	if(!checkSPemail(obj.uemail.value)){
		alert("기관 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}

	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	var count = 0;
	var num=obj.payMethods.length

	for(i=0; i<num; i++)
	{
		if(obj.payMethods[i].checked == true)
	{
		count +=1;
	}
	}
	if(count==0)
	{
		alert("결제방식을 선택 해 주세요.");
	return;
	}


	if (obj.payMethods[0].checked==true)
	{
		obj.action="purchase.asp?product=kihf_ok&pdiv=swc";
	}else{
		roadingimg.style.display=""; //로딩이미지
		obj.action="purchase.asp?product=kihf_bank&pdiv=swc";
	}
	obj.submit();

}


//사회복지화 공동구매 1차
function microsoft_send_swc(obj){
	var flag = false;


	if(obj.copycnt.value == "" && obj.copycnt2.value == "" ){
		alert("수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}

	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.company.value == ""){
		alert("복지관명(한글)을 선택하세요");
		obj.company.focus();
		return;
	}


	if(obj.engcompany.value == ""){
		alert("복지관명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}

	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}


	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}

	if(!checkSPemail(obj.uemail.value)){
		alert("기관 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}

	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	var count = 0;
	var num=obj.payMethods.length

	for(i=0; i<num; i++)
	{
		if(obj.payMethods[i].checked == true)
	{
		count +=1;
	}
	}
	if(count==0)
	{
		alert("결제방식을 선택 해 주세요.");
	return;
	}


	if (obj.payMethods[0].checked==true)
	{
		obj.action="purchase.asp?product=kihf_ok&pdiv=swc";
	}else{
		roadingimg.style.display=""; //로딩이미지
		obj.action="purchase.asp?product=kihf_bank&pdiv=swc";
	}
	obj.submit();

}


//사회복지화 공동구매 1차 New
function microsoft_send_swc_new(obj){
	var flag = false;


	if(obj.copycnt.value == "" && obj.copycnt2.value == ""  && obj.copycnt3.value == ""){

		alert("수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}

	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.company.value == ""){
		alert("복지관명(한글)을 선택하세요");
		obj.company.focus();
		return;
	}


	if(obj.engcompany.value == ""){
		alert("복지관명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}

	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}


	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}

	if(!checkSPemail(obj.uemail.value)){
		alert("기관 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}

	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	var count = 0;
	var num=obj.payMethods.length

	for(i=0; i<num; i++)
	{
		if(obj.payMethods[i].checked == true)
	{
		count +=1;
	}
	}
	if(count==0)
	{
		alert("결제방식을 선택 해 주세요.");
	return;
	}



	if (obj.payMethods[0].checked==true)
	{
		obj.action="purchase.asp?product=kihf_ok&pdiv=swc";
	}else{
		roadingimg.style.display=""; //로딩이미지
		obj.action="purchase.asp?product=kihf_bank&pdiv=swc";
	}
	obj.submit();

}


//공동구매2차
function microsoft_send2_kihf2(obj){
	var flag = false;

/*
	if(obj.copycnt.value == ""){
		alert("제품 ① 수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}

	if(obj.copycnt2.value == ""){
		alert("제품 ② 수량을 선택하세요");
		obj.copycnt2.focus();
		return;
	}

*/

	if(obj.copycnt.value == "" && obj.copycnt2.value == "" && obj.copycnt3.value == ""){
		alert("제품 수량을 선택하세요");
		return;
	}



	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}


	//if(parseInt(obj.copycnt2.value,10) > 0){

	if(obj.unameeng1.value == ""){
		alert("구매담당자 FirstName을 입력하세요");
		obj.unameeng1.focus();
		return;
	}

	if(obj.unameeng2.value == ""){
		alert("구매담당자 LastName을 입력하세요");
		obj.unameeng2.focus();
		return;
	}
	//}




	var companychkd = document.getElementsByName("company");
	var companyname = "";

	for(var nPos = 0; nPos < companychkd.length; nPos++){
		if(companychkd[nPos].checked == true){			
			companyname = companychkd[nPos].value;
		}
	}

	if(companyname == ""){
		alert("센터명(한글)을 선택하세요");
		return;
	}


	if(companyname != "(재)한국건강가정진흥원"){
		if(obj.companyarea.value == ""){
			alert("센터 지역명을 입력하세요\n예:강남구");
			obj.companyarea.focus();
			return;
		}
	}


	if(obj.engcompany.value == ""){
		alert("센터명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}


	if(obj.engcompanyarea.value == ""){
		alert("센터 지역명(영어)을 입력하세요");
		obj.engcompanyarea.focus();
		return;
	}


	if(obj.hp1.value == ""){//1
		alert("구매담당자 핸드폰을 입력하세요");
		obj.hp1.focus();
		return;
	}

	if(obj.hp2.value == ""){//2
		alert("구매담당자 핸드폰을 입력하세요");
		obj.hp2.focus();
		return;
	}


	if(obj.hp3.value == ""){//3
		alert("구매담당자 핸드폰을 입력하세요");
		obj.hp3.focus();
		return;
	}

	obj.hp.value = obj.hp1.value + "-" +  obj.hp2.value + "-" +  obj.hp3.value

	if(obj.tel1.value == ""){//1
		alert("전화번호를 입력하세요");
		obj.tel1.focus();
		return;
	}

	if(obj.tel2.value == ""){//2
		alert("전화번호를 입력하세요");
		obj.tel2.focus();
		return;
	}


	if(obj.tel3.value == ""){//3
		alert("전화번호를 입력하세요");
		obj.tel3.focus();
		return;
	}

	obj.tel.value = obj.tel1.value + "-" +  obj.tel2.value + "-" +  obj.tel3.value


	if(obj.fax1.value == ""){//1
		alert("팩스를 입력하세요");
		obj.fax1.focus();
		return;
	}


	if(obj.fax2.value == ""){//2
		alert("팩스를 입력하세요");
		obj.fax2.focus();
		return;
	}

	if(obj.fax3.value == ""){//3
		alert("팩스를 입력하세요");
		obj.fax3.focus();
		return;
	}


	obj.fax.value = obj.fax1.value + "-" +  obj.fax2.value + "-" +  obj.fax3.value



	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}

	if(!checkSPemail(obj.uemail.value)){
		alert("기관 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}
/*
	if(obj.uemail2.value == ""){
		alert("외부포털 이메일을 입력하세요");
		obj.uemail2.focus();
		return;
	}

	if(!checkSPemail(obj.uemail2.value)){
		alert("외부포털 이메일 주소(형식)가 잘못 되었습니다.");
		return;
	}
*/
	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	//if(parseInt(obj.copycnt2.value,10) > 0){

		if(obj.strOfficeAddr1eng.value == ""){
			alert("Address를 입력하세요");
			obj.strOfficeAddr1eng.focus();
			return;
		}

		if(obj.cityeng.value == ""){
			alert("City를 입력하세요");
			obj.cityeng.focus();
			return;
		}

	//}

	if(obj.ImageFile1.value == ""){
		alert("사업자등록증/고유번호증 사본을 첨부 해 주세요");
		obj.ImageFile1.focus();
		return;
	}

	if(obj.comreg1.value == ""){//1
		alert("사업자번호/고유번호 입력 해 주세요");
		obj.comreg1.focus();
		return;
	}

	if(obj.comreg2.value == ""){//2
		alert("사업자번호/고유번호 입력 해 주세요");
		obj.comreg2.focus();
		return;
	}

	if(obj.comreg3.value == ""){//3
		alert("사업자번호/고유번호 입력 해 주세요");
		obj.comreg3.focus();
		return;
	}


	obj.comreg.value = obj.comreg1.value + "-" +  obj.comreg2.value + "-" +  obj.comreg3.value



	var count = 0;
	var num=obj.payMethods.length

	for(i=0; i<num; i++)
	{
		if(obj.payMethods[i].checked == true)
	{
		count +=1;
	}
	}
	if(count==0)
	{
		alert("결제방식을 선택 해 주세요.");
	return;
	}


	if (obj.payMethods[0].checked==true)
	{
		obj.action="purchase_kihf_ok.asp&pdiv=kihf";
	}else{
		obj.action="purchase_kihf_bank_ok.asp&pdiv=kihf";
	}
	obj.submit();

}


function companychk(obj){
	var companychkd = document.getElementsByName("company");
	var companyname = "";

	for(var nPos = 0; nPos < companychkd.length; nPos++){
		if(companychkd[nPos].checked == true){			
			companyname = companychkd[nPos].value;
		}
	}
	
	if(companyname==""){
		alert("센터명(한글)을 선택하세요");
		return;	
	
	}

}


function companyengchk(obj){
	var companychkd = document.getElementsByName("company");
	var companyname = "";

	for(var nPos = 0; nPos < companychkd.length; nPos++){
		if(companychkd[nPos].checked == true){			
			companyname = companychkd[nPos].value;
		}
	}
	
	if(companyname=="다문화가족지원센터"){
		obj.engcompany.value ='MFSC';	
	}else{
		obj.engcompany.value ='HFSC';	
	}

}



//공동구매
function microsoft_send3_kihf(obj,pdiv){

	var flag = false;

	//if(obj.ordno.value == ""){
	//	alert("주문번호를 입력 하세요");
	//	obj.ordno.focus();
	//	return;
	//}

	obj.action="purchase.asp?product=kihf_list_ok&pdiv="+pdiv+"";
	obj.submit();

}


//IDS 프로모션
function autodesk_send_ids(obj){
	var flag = false;


	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	
	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}


	obj.action="/purchase/purchase_ok.asp";
	obj.submit();

}


//IDS 프로모션
function send_new(obj){
	var flag = false;


	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	
	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	roadingimg.style.display=""; //로딩이미지

	obj.action="/purchase/purchase_ok.asp";
	obj.submit();

}


//영수증출력
function payment_view(str){

	//alert("본 거래확인서는 세금계산서 대용으로 사용할 수 없습니다.\n\n세금계산서 발행은 별도 요청 바랍니다.");
	window.open(str,"INIPRINT","width=640,height=700,scrollbars=yes,left=10,top=0");

}





function endcompany_kihf(obj){
	if(obj.company.value == "건강가정지원센터"){
		obj.engcompany.value="영어1";
	}else if(obj.company.value == "다문화가정지원센터"){	
		obj.engcompany.value="영어2";
	}else{
		obj.engcompany.value="";
	}
}


function company_kihf(obj){
	if(obj.company.value == "(재)한국건강가정진흥원"){
		document.getElementById("companyarea").readOnly = true;
		obj.companyarea.style.background = '#E1E1E1';
		obj.companyarea.value='';
	}else{	
		document.getElementById("companyarea").readOnly = false;
		obj.companyarea.style.background = '#FFFFFF';
	}
}


function total_kihf_item_1(obj){//신규

	if(obj.copycnt.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt.value;
	var ea = obj.ea.value;
		//document.getElementById("total").innerText=amt*ea;
		//document.getElementById("total").innerText="① 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.totalvalue.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";


}



function total_kihf(obj){//신규

	if(obj.copycnt.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt.value;
	var ea = obj.ea.value;
		document.getElementById("total").innerText=amt*ea;
		document.getElementById("total").innerText="① or ② 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.totalvalue.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";


}


function total_kihf2(obj){//윈도우

	if(obj.copycnt2.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt2.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt2.value;
	var ea = obj.ea2.value;

		document.getElementById("total2").innerText="③ 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.total2value.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";
}

function total_kihf3(obj){ //갱신

	if(obj.copycnt3.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt3.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt3.value;
	var ea = obj.ea3.value;

		document.getElementById("total").innerText=amt*ea;
		document.getElementById("total").innerText="① or ② 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.totalvalue.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";
}

function total_kihf4(obj){//윈도우

	if(obj.copycnt4.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt4.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt4.value;
	var ea = obj.ea4.value;

		document.getElementById("total4").innerText="④ 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.total4value.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10) + parseInt((obj.total4value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";
}

function total_purchase_chk(obj,txt){
	 if(obj.copycnt.value!="" &&  obj.copycnt3.value!=""){
		alert("신규와 갱신은 같이 구매 할 수 없습니다.");
	 }

	 if(txt == "new"){//신규
		obj.copycnt3.value ="";
	 }else if(txt == "renew"){//갱신
		obj.copycnt.value ="";
	 }

}


//-----------사회복지 3개항목------------------------------
function total_kihf_1(obj){// 1번항목

	if(obj.copycnt.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt.value;
	var ea = obj.ea.value;
		document.getElementById("total").innerText=amt*ea;
		document.getElementById("total").innerText="① 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.totalvalue.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10) + parseInt((obj.total3value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";

	

}


function total_kihf2_1(obj){//2번항목

	if(obj.copycnt2.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt2.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt2.value;
	var ea = obj.ea2.value;

		document.getElementById("total2").innerText="② 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.total2value.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10) + parseInt((obj.total3value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";




}

function total_kihf3_1(obj){ //3번항목

	if(obj.copycnt3.value == ""){
		alert("수량을 선택하세요");
		obj.copycnt3.focus();
		return;
	}


	pricesum = 0;
	var amt = obj.copycnt3.value;
	var ea = obj.ea3.value;

		document.getElementById("total3").innerText=amt*ea;
		document.getElementById("total3").innerText="③ 합계 : "+FormatNumber(Math.floor(amt*ea))+"원";

		obj.total3value.value=Math.floor(amt*ea);
		obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10) + parseInt((obj.total3value.value),10);
		document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";


}



function total_purchase_chk2(obj,txt){
	 if(obj.copycnt.value!="" &&  (obj.copycnt2.value!="" ||  obj.copycnt3.value!="")){
		alert("①과 ②,③은  같이 구매 할 수 없습니다.");
	 }

	 if(txt == "1"){//신규
		obj.copycnt2.value ="";
		obj.copycnt3.value ="";

		obj.total2value.value =0;
		obj.total3value.value =0;
 

		document.getElementById("total2").innerText="② 합계 : 0원";	 
		document.getElementById("total3").innerText="③ 합계 : 0원";	 


	 }else if(txt == "2" || txt == "3"){//갱신
		
		obj.copycnt.value ="";	
		obj.totalvalue.value =0;

		document.getElementById("total").innerText="① 합계 : 0원";

	 }

	obj.totaltotvalue.value = parseInt((obj.totalvalue.value),10) + parseInt((obj.total2value.value),10) + parseInt((obj.total3value.value),10);
	document.getElementById("totaltot").innerText="전체 합계 : "+FormatNumber(obj.totaltotvalue.value)+"원";


}

//--------사회복지 3개항목-------





//마이크로소프트
function microsoft_send2_kihf_edit(obj){
	var flag = false;


	if(obj.copycnt.value == ""){
		alert("수량을 입력하세요");
		obj.copycnt.focus();
		return;
	}

	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.company.value == ""){
		alert("센터명(한글)을 선택하세요");
		obj.company.focus();
		return;
	}



	if(obj.engcompany.value == ""){
		alert("센터명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}

	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}



	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}

/*
	if(obj.uemail2.value == ""){
		alert("외부포털 이메일을 입력하세요");
		obj.uemail2.focus();
		return;
	}
*/

	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	if(obj.paymethods.value == ""){
		alert("결제방식을 입력 해 주세요");
		obj.paymethods.focus();
		return;
	}


	obj.action="purchase_admin_detail_modify_Ok.asp";
	obj.submit();

}




//공동구매2차
function microsoft_send2_kihf_edit2(obj){
	var flag = false;


	if(obj.uname.value == ""){
		alert("구매담당자 이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.company.value == ""){
		alert("센터명(한글)을 선택하세요");
		obj.company.focus();
		return;
	}



	if(obj.engcompany.value == ""){
		alert("센터명(영어)을 입력하세요");
		obj.engcompany.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("전화번호를 입력하세요");
		obj.tel.focus();
		return;
	}

	if(obj.fax.value == ""){
		alert("팩스를 입력하세요");
		obj.fax.focus();
		return;
	}



	if(obj.uemail.value == ""){
		alert("기관 이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}


/*
	if(obj.uemail2.value == ""){
		alert("외부포털 이메일을 입력하세요");
		obj.uemail2.focus();
		return;
	}
*/

	if(obj.strOfficePost1.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost1.focus();
		return;
	}

	if(obj.strOfficePost2.value == ""){
		alert("우편번호를 입력하세요");
		obj.strOfficePost2.focus();
		return;
	}

	if(obj.strOfficeAddr1.value == ""){
		alert("주소를 입력하세요");
		obj.strOfficeAddr1.focus();
		return;
	}

	if(obj.paymethods.value == ""){
		alert("결제방식을 입력 해 주세요");
		obj.paymethods.focus();
		return;
	}


	obj.action="purchase_admin_detail_modify_Ok.asp";
	obj.submit();

}



//마이크로소프트
function questionnaire_kihf_edit(obj){
	var flag = false;


	obj.action="purchase_admin_detail_modify_qOk.asp";
	obj.submit();

}






//어도비
function adobe_send(obj,cnt){
	var flag = false;



	for(var nPos = 1; nPos <= cnt; nPos++){
		
		if (eval("document.frmMain.quantity"+nPos+".value") != 0)
		{
			flag=true;
		}

	}

	if(!flag && obj.productetc.value==""){
		alert("제품 구매 수량을 입력하세요");
		return;	
	}

	if (obj.productTypeIdx(1).checked && obj.productup.value=="")
	{
		alert("업그레이드 버전/내용을 입력하세요");
		obj.productup.focus();
		return;	
	}

	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	obj.action="/purchase/purchase_autodesk_ok.asp";
	obj.submit();

}


//공통
function comm_send(obj){

	flag=false; 

	var  cnt = parseInt(obj.ncount.value,10);
	for(var nPos = 0; nPos <= cnt-1; nPos++){
		/*
		if (eval("document.frmMain.quantity"+nPos+".value") != 0)
		{
			flag=true;
		}
		*/
	}
	/*
	if(!flag){
		alert("제품 구매 수량을 입력하세요");
		return;	
	}
	*/
	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

    //obj.target = "!OK"
	obj.action="/purchase/purchase_comm_ok.asp";
	obj.submit();

}

//
function A100_send(obj){

	flag=false; 


	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}
	if(obj.company.value == ""){
		alert("회사명을 입력하세요");
		obj.company.focus();
		return;
	}
	if(obj.hp.value == ""){
		alert("연락처를 입력하세요");
		obj.company.focus();
		return;
	}
	if(obj.uemail.value == ""){
		alert("이메일을 입력하세요");
		obj.company.focus();
		return;
	}
	
    //obj.target = "!OK"
	obj.action="/purchase/purchase_comm_ok.asp";
	obj.submit();

}
function gw_send(obj){

	flag=false; 

	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}
	if(obj.company.value == ""){
		alert("회사명을 입력하세요");
		obj.company.focus();
		return;
	}
	if(obj.hp.value == ""){
		alert("연락처를 입력하세요");
		obj.hp.focus();
		return;
	}
	if(obj.uemail.value == ""){
		alert("이메일을 입력하세요");
		obj.uemail.focus();
		return;
	}
	if(obj.checkbox.checked == false){
		alert("이용약관에 동의해주세요");
		obj.checkbox.focus();
		return;
	}
    //obj.target = "!OK"
	obj.action="/purchase/purchase_comm_ok.asp";
	obj.submit();

}


//cadpower lite
function cp_lite_send(obj){

	if(obj.company.value == ""){
		alert("회사명 혹은 개인명을 입력하세요");
		obj.company.focus();
		return;
	}


	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.tel.value == ""){
		alert("연락처를 입력력하세요");
		obj.tel.focus();

		return;
	}

	if(obj.licensenum.value == ""){
		alert("라이선스번호를 입력력하세요");
		obj.licensenum.focus();
		return;
	}


	if(obj.uemail.value == "" || obj.uemail2.value == ""){
		alert("이메일을 입력하세요");
		return;
	}


    //obj.target = "!OK"
	obj.action="/purchase/purchase_comm_ok.asp";
	obj.submit();

}



//lumion
function lumion_send(obj){

	flag=false; 
	var  cnt = 0;

	if (obj.ProductTypeName.value=="New")	{
		cnt = parseInt(obj.ncount1.value,10);
		seqnum = 1;

	}else if (obj.ProductTypeName.value=="Upgrade"){
		cnt = parseInt(obj.ncount2.value,10);
		seqnum = 2;

	}else if (obj.ProductTypeName.value=="Education"){
		cnt = parseInt(obj.ncount3.value,10);
		seqnum = 3;
	}

	for(var nPos = 0; nPos <= cnt-1; nPos++){
		
		if (eval("document.frmMain.quantity"+seqnum+""+nPos+".value") != 0)
		{
			flag=true;
		}

	}

	if(!flag){
		alert("제품 구매 수량을 입력하세요");
		return;	
	}
	
	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

    //obj.target = "!OK"
	obj.action="/purchase/purchase_comm_ok.asp";
	obj.submit();

}


//
function comm_send_mail(obj){
	var flag = false;
	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	obj.action="/purchase/purchase_ok.asp";
	obj.submit();

}


//
function comm_send_mail_new(obj){
	var flag = false;
	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	obj.action="/purchase/purchase_comm_ok.asp";
	obj.submit();

}




//DELL
function dell_send(obj,cnt){
	var flag = false;
	if(obj.uname.value == ""){
		alert("이름을 입력하세요");
		obj.uname.focus();
		return;
	}

	if(obj.hp.value == "" && obj.tel.value == "" && obj.uemail.value == "" && obj.uemail2.value == ""){
		alert("휴대폰, 대표번호, 이메일 중 하나를 입력하세요");
		return;
	}

	obj.action="purchase_dell_ok.asp";
	obj.submit();

}


function izex_viewProduct(obj,sVar)
{
	var  cnt = 0;

	obj.ProductTypeName.value=sVar;
	
	if (obj.ProductTypeName.value=="New"){
		vp1.style.display = "";
		vp2.style.display = "none";
		vp3.style.display = "none";

		cnt = parseInt(obj.ncount1.value,10);

		for(var nPos = 0; nPos <= cnt; nPos++){			
			eval("document.frmMain.quantity1"+nPos+".value=0");
		}

	}else if (obj.ProductTypeName.value=="Upgrade")	{
		vp2.style.display = "";
		vp1.style.display = "none";
		vp3.style.display = "none";
		
		cnt = parseInt(obj.ncount2.value,10);
		for(var nPos = 0; nPos <= cnt; nPos++){			
			eval("document.frmMain.quantity2"+nPos+".value=0");
		}

	}else if (obj.ProductTypeName.value=="Education")	{
		vp3.style.display = "";
		vp1.style.display = "none";
		vp2.style.display = "none";

		cnt = parseInt(obj.ncount3.value,10);
		for(var nPos = 0; nPos <= cnt; nPos++){			
			eval("document.frmMain.quantity3"+nPos+".value=0");
		}
	}


	return 	cnt;
}



function viewProductUp(obj,sVar)
{
	if (sVar=='Upgrade'){
		vp.style.display = "";
	}else{
		obj.productup.value = "";
		vp.style.display = "none";
	}

	obj.ProductTypeName.value=sVar;


}


function goURL2(obj)
{
	obj.action="/product/estimate/estimate_reg.asp";
	obj.submit();
}

function delete_purchase(kihf_idx, chasu)
{
	if(confirm('선택한 거래건을 삭제 하시겠습니까?.!!!')){
           window.location.href="purchase_admin_detail_DelOK.asp?kihf_idx="+kihf_idx+"&chasu="+chasu ;
		}
	return;	
}

function delete_questionnaire(db_idx)
{
	if(confirm('선택한 거래건을 삭제 하시겠습니까?.!!!')){
           window.location.href="purchase_admin_detail_qDelOK.asp?db_idx="+db_idx ;
		}
	return;	
}


function doc_purchase(kihf_idx)
{
	if(confirm('doc 파일로 저장 하시겠습니까?.!!!')){
           window.location.href="purchase_admin_doc_kihf.asp?kihf_idx="+kihf_idx+"&chasu="+chasu ;
		}
	return;	
}

function doc_purchase2(kihf_idx, str, chasu){
	if(confirm('주문서를 엑셀로 파일로 저장 하시겠습니까?.!!!')){

           window.location.href="excel/excel4.asp?kihf_idx="+kihf_idx+"&dt="+str+"&chasu="+chasu ;
		}
	return;	
}


function pub_purchase(kihf_idx)
{
	if(confirm('공문파일로 변환(.doc) 저장 하시겠습니까?.!!!')){
           window.location.href="purchase_admin_pub_doc_kihf.asp?kihf_idx="+kihf_idx+"&chasu="+chasu ;
		}
	return;	
}


function pub_purchase2(kihf_idx,chasu)
{
	if(confirm('공문을 엑셀로 파일로 저장 하시겠습니까?.!!!')){
           window.location.href="excel/excel3.asp?kihf_idx="+kihf_idx+"&chasu="+chasu ;
		}
	return;	
}


function modify_detail_purchase(kihf_idx, page, chasu)
{
	//if(confirm('선택한 교육신청을 수정 하시겠습니까?.!!!')){
           window.location.href="purchase_admin_detail_modify_new.asp?kihf_idx="+kihf_idx+"&page="+page+"&chasu="+chasu ;
	//	}
	//return;	
}



function modify_detail_questionnaire(db_idx, page)
{
	//if(confirm('선택한 교육신청을 수정 하시겠습니까?.!!!')){
           window.location.href="purchase_admin_detail_modify_qnew.asp?db_idx="+db_idx+"&page="+page ;
	//	}
	//return;	
}


function list_detail_admin_purchase(obj,kihf_idx,page,chasu){
	obj.action = "/purchase/purchase_admin_detail.asp?kihf_idx="+kihf_idx+"&page="+page+"&chasu="+chasu ;
	obj.submit();	
}


function list_detail_questionnaire(obj,db_idx,page){
	obj.action = "/purchase/purchase_admin_qdetail.asp?db_idx="+db_idx+"&page="+page;
	obj.submit();	
}


function xls_down(str)
{
     window.location.href=str;
}

function fnOpenChapter() {
var obj = $('#chapter_select');
var iHeight = (document.body.clientHeight / 2) - obj.height() / 2 + document.body.scrollTop;
var iWidth = (document.body.clientWidth / 2) - obj.width() / 2 + document.body.scrollLeft;
	obj.css({
	position: 'absolute'
	, display:'block'
	, top: iHeight
	, left: iWidth
	});
}