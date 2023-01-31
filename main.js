const copyIcon = `<span class="gg-copy"></span>`;
const input = document.querySelectorAll("p");
const cmd = [
	`cd /d %ProgramFiles%\Microsoft Office\Office16 \n cd /d %ProgramFiles(x86)%\Microsoft Office\Office16`,
	`for /f %x in ('dir /b ..\root\Licenses16\ProPlus2021VL_KMS*.xrm-ms') do cscript ospp.vbs /inslic:" ..\root\Licenses16\%x""`,
	`'cscript ospp.vbs /inpkey:FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH
		cscript ospp.vbs /unpkey:BTDRB >nul
		cscript ospp.vbs /unpkey:KHGM9 >nul
		cscript ospp.vbs /unpkey:CPQVG >nul
		cscript ospp.vbs /sethst:s8.uk.to
		cscript ospp.vbs /setprt:1688
		cscript ospp.vbs /act'`
];

input.forEach((item, i) => {
	item.innerText = cmd[i];
	item.innerHTML += copyIcon;
});

const copy = document.querySelectorAll("span");
copy.forEach((copyBtn) => {
	copyBtn.addEventListener("click", () => {
		var texto = copyBtn.parentNode.innerText;
		navigator.clipboard.writeText(texto);
	});
});
