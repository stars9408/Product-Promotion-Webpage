2020년 12월 진행했던 특정 제품 프로모션에 관한 페이지 입니다.
http://www.krinfra.co.kr/a100/

# 요구사항:

1. 디자이너가 만든 페이지에서 주문 상담 문의를 받는 기능을 만들어야 한다.
    1. HTML 페이지를 ASP로 변환하여야 한다.
    2. 기존에 회사 공식 홈페이지를 통해 문의를 받아 처리하는 javascript .js 에 기능은 비슷하게 구현하여야 한다.
        1. 필요 정보 받아오기 from FORM
        2. 받아온 정보 SQL으로 DB에 넣어주기
        3. DB 저장을 통해 회사 그룹웨어 '제품구매문의'에 추가
        4. 주문상담 정보를 담당자에게 email로 보내주어야 한다.


우선 FORM에 들어가는 정보들을 기존에 사용하던  javascript, ASP, SQL 등으로 전달해주기 위해 name을 맞추어 주었습니다.

--------------------------------------------------------------------------------------------------------------------------------------------
<div class="row">
										<div class="column width-10 offset-1">
											<div class="field-wrapper">
												<input type="text" name="uname" class="form-email form-element large" placeholder="담당자 *" tabindex="2" required="" >
											</div>
										</div>
										<div class="column width-10 offset-1">
											<div class="field-wrapper">
												<input type="text" name="company" class="form-email form-element large" placeholder="회사명 *" tabindex="2" required="" >
											</div>
										</div>
										<div class="column width-10 offset-1">
											<div class="field-wrapper">
												<input type="text" name="hp" class="form-email form-element large" placeholder="연락처 *" tabindex="2" required="" >
											</div>
										</div>
										<div class="column width-10 offset-1">
											<div class="field-wrapper">
												<input type="text" name="uemail" class="form-email form-element large" placeholder="이메일 *" tabindex="2" required="" >
											</div>
										</div>
										<div class="column width-6 offset-3 center">
											<a href="javascript:A100_send(document.frmMain);" class="form-submit button text-uppercase bkg-theme bkg-hover-charcoal color-white color-hover-white text-medium">보내기</a>					
										</div>
									</div>
									<input type="text" name="honeypot" class="form-honeypot form-element">
								</form>
--------------------------------------------------------------------------------------------------------------------------------------------

기존 공식 홈페이지에서 문의를 받아서 처리하던 기능들을 살펴보니

- 메인홈페이지/?=xxxxx1 .asp
    - include 되어있는 xxxx2.asp 가 가진 FORM
        - FORM에 include 되어있는 FORM을 가진 xxxx3.asp
- xxxxx1 .asp 에서 연결되어 있고 불러오는 javascript.js
    - javascript.js 에서 가져온 object를 action으로 넘겨준다
- javascript.js에서 action으로 보내진 object를 받는 xxxxx4.asp

로 구성되어 있었습니다.

그래서 전

- 메인 페이지
    - FORM
    - FORM의 object를 javascript.js로 보내주는 모든 설정 및 기능
- javascript.js = 기존에 존재하던 것에 해당 기능에 대한 것만 추가
- xxxxx4.asp = 기존에 존재하던 것에 간단히 조금만 추가

하였습니다.

우선, 메인페이지에 아래 내용들을 추가해주었습니다.

--------------------------------------------------------------------------------------------------------------------------------------------
<%
Dim arrProDuctNivia(1)

arrProDuctNivia(0) = "NVIDIA"
arrProDuctNivia(1) = "A100"
%>
...
...
<input name="ProductMajorName" type="hidden" value="NVIDIA_A100">
									<input name="ProductMajorIdx" type="hidden" value="22">
									<input name="strPro1" type="hidden" value="<%=arrProDuctNivia(1)%>">

									<input type="hidden" name="ProductTypeName" value = "New"> 
									<input type="hidden" name="ncount" value = "1"> 
									<input type="hidden" name="quantity0" value = "1"> 
									<input type="hidden" name="product0" value = "A100">
...
...
...
<!-- Js -->
	<script Language='JavaScript' src='/js/comm.js'></script>
	<script Language='JavaScript' src='/js/estimate.js'></script>
--------------------------------------------------------------------------------------------------------------------------------------------

- 정보를 받을 때 제품 구분을 할 수 있게 정보를 맞게 넣어 주기
    - 추후 이메일 발송할 때 알맞은 담당자에게 연결하기 위한 구분 외 다른 기능들을 알맞게 활용하기 위해
- Javascript 연결

Javascript에서 아래 내용을 추가하였습니다.

--------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------

- FORM에 필수기입 내용들을 체크하고 비어있다면 alert를 주는 기능들
- action 으로 object를 보내주는 기능

Javascript에서 action 을 받는 xxxxx4.asp의 내용

--------------------------------------------------------------------------------------------------------------------------------------------
<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- #include virtual = "/dbconn/config.asp" -->
<!--#include virtual="/func/function.asp" -->
<% 

	ProductMajorIdx		= CheckWord(request("ProductMajorIdx"))

	productTypeIdx		= CheckWord(request("productTypeIdx"))
	ProductMajorName	= CheckWord(request("ProductMajorName"))
	productSectionIdx	= CheckWord(request("productSectionIdx"))
	ProductTypeName		= CheckWord(request("ProductTypeName"))
	uname				= CheckWord(request("uname"))
	company				= CheckWord(request("company"))
	mobile				= CheckWord(request("mobile"))

	mobile				= CheckWord(request("hp"))
	phone				= CheckWord(request("tel"))
	fax					= CheckWord(request("fax"))
...
...
...
'메일발송자
	Set RsMail = DBcon.Execute(SQL_M)

	memo = Replace(memo, chr(13), "<BR>")

	mail = ""
	mail = mail & "<h3><u>"&ProductMajorName&"</u></h3>"
	mail = mail & "<table width=680 border=0 cellspacing=2 cellpadding=0>"
	mail = mail & "	<TR height=25>"
	mail = mail & "		<TD bgcolor=#F5F5F5>구매형태</TD>"
	mail = mail & "		<TD><b>"&ProductTypeName&"</b></TD>"
	mail = mail & "	</TR>"
	mail = mail & "	<TR height=25>"
	mail = mail & "		<TD bgcolor=#F5F5F5>구매제품내역</TD>"
	mail = mail & "		<TD>"
	mail = mail & "			<TABLE width=250 border=0 cellspacing=0 cellpadding=0>"
	mail = mail & "			  <TR><TD width=200  align=center><strong><u>제품명</u></strong></TD><TD width=50 align=center><strong><u>수량</u></strong></TD></TR>"
	mail = mail & "			  <TR>"
	mail = mail & "			  	<TD colspan=3>"&productdetail&"</TD>"
	mail = mail & "			  </TR>"
	mail = mail & "			  </TABLE>"
	mail = mail & "		</TD>"
	mail = mail & "	</TR>"
...
...
...
ELSEIF ProductMajorName = "NVIDIA_A100" Then 'NVIDIA 테스트!!!!!!!!!!!!!!!!!!!!

		Call SendMailFromGmail("ㅌㅌㅌㅌ@ㅌㅌㅌㅌ.co.kr", "제품구매문의 -  "&ProductMajorName, "ㅌㅌㅌㅌㅌㅌ@ㅌㅌㅌㅌㅌㅌ.co.kr", mail, remailCC)

...
pagego="purchase.asp?product="&ProductMajorName&""
	If ProductMajorName = "NVIDIA_A100" Then
		pagego="/a100"
	End if
%>

<SCRIPT LANGUAGE="JavaScript">
<!--
alert("제품 문의가 접수 되었습니다.\n신속한 답변 드리겠습니다.");
location.href="<%=pagego%>";
//-->
</SCRIPT>
--------------------------------------------------------------------------------------------------------------------------------------------

- FORM에서 정보를 가져오고
- 가져온 정보를 SQL을 활용하여 메일에 넣기위해 정리해주고
- 현재 ProductmajorName에 맞게 이메일 받는 주소, 보내는 주소를 맞추어 주고
- 해당 제품은 공식홈페이지 제품문의와 다른 페이지에 존재하기 때문에, 문의접수 후 이어지는 페이지를 다르게 해줍니다.
- 접수 후, 페이지를 옮겨줍니다.

- **한번 테스트 해보았습니다.**

- **폼에 정보를 넣어주고 '접수'를 하였고,**

- **완료가 되었다는 ALERT를 받았습니다.**

- **이메일을 받았습니다!**

- **그룹웨어 '영업지원/제품구매문의'에 정보가 들어왔습니다!**


## 느낌점 및 후기:

- **우선 기존에 사용하던 페이지들에 있는 것들을 어떻게 새롭게 만들어진 페이지에 적용할지 고민을 해보았습니다. 여러가지 ASP 페이지들을 똑같이 사용해야 할지(include를 활용하여) 아니면 현재 만들어지고 주어진 HTML를 ASP로 변환하여 그 안에 모든 include된 것들을 옮겨올지...**
- **결국은 옮겨와서 적용시키기로 하였고, 그 과정에 여러가지 정보들이 겹치거나 이상하게 전달되지 않게 튜닝? 하는 방식을 활용하였습니다.**
- **가장 큰 문제를 주었던건 js 파일과 연결이었습니다. 우선 계속해서 javascript.js에 있는 기능이 적용되지 않아서 골머리를 앓고 있던 도중, 지속적인 테스트를 통해 javascript.js가 연결이 안되어 있는 것을 확인하였고, 상위 폴더에 있는 js라는 폴더와 하위 폴더에 있는 js라는 폴더가 두가지 존재한다는 것을 확인 하였습니다.**
- **위 사항을 확인하고, 하위 폴더에 javascript.js를 만들어 테스트도 해보았습니다. 결론은, javascript의 경로를 재설정 해주어서 해결할 수 있었습니다.**
- **간단했던 프로젝트(?) 였지만 이루어 내어서 기뻣습니다.**
