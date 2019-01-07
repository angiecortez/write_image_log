const downloadBtn = document.querySelector('#saveBtn');
const cardtext = document.getElementById('cardtext');
const quotetypography = document.getElementById('quotetypography');
const sizes = document.getElementById('sizes');
console.log(sizes.style.width);
const canvas = document.getElementById('canvas');
// canvas.width = 400;
// canvas.height = 280;
console.log('width: ', canvas.width, 'height: ', canvas.height);
const ctx = canvas.getContext('2d');
let img = new Image();
img.crossOrigin = 'anonymous';
img.setAttribute('crossOrigin', 'anonymous');

const x = document.getElementById('width');
const y = document.getElementById('height');
const right = document.getElementById('right');
let fileName = '';

const onChangeHeight = () => {
	const heightValue = y.value;
	y.innerHTML = heightValue;
	generateFinal();
};

const onChangeWidth = () => {
	const widthValue = x.value;
	x.innerHTML = widthValue;
	generateFinal();
};

const onChangeRight = () => {
	const rightValue = right.value;
	right.innerHTML = rightValue;
	generateFinal();
};

const onChangeTypography = () => {
	const p = document.querySelector('p');
	const fontFamily1 = quotetypography.value;
	p.style.fontFamily = fontFamily1;
	console.log('typographyValue: ', fontFamily1);
};
const drawInlineSVG = (ctx, rawSVG, callback) => {
	const svg = new Blob([ rawSVG ], { type: 'image/svg+xml' }),
		domURL = self.URL || self.webkitURL || self,
		url = domURL.createObjectURL(svg),
		img = new Image();
	img.crossOrigin = 'anonymous';
	img.setAttribute('crossOrigin', 'anonymous');

	img.onload = function() {
		ctx.drawImage(img, 0, 0);
		domURL.revokeObjectURL(url);
		callback(img);
	};

	img.src = url;
};

const generateFinal = () => {
	// const finalCardSize = { width: 550, height: 280 };
	const finalCardSize = { width: sizes.style.width, height: sizes.style.height };
	const finalLogoSize = { width: x.value, height: y.value };
	// overwrite the description
	cardtext.innerHTML = document.querySelector('input[name=quotetext]').value;

	const htmlcanvas = document.getElementById('htmlcanvas');
	const quotelogo = document.querySelector('input[name=quotelogo]');

	const data =
		'<svg xmlns="http://www.w3.org/2000/svg" width="' +
		finalCardSize.width +
		'" height="' +
		finalCardSize.height +
		'">' +
		'<foreignObject width="100%" height="100%">' +
		htmlcanvas.innerHTML +
		'</foreignObject>' +
		'</svg>';

	drawInlineSVG(ctx, data, () => {
		// console.log(canvas.toDataURL('image/jpeg')); // -> PNG data-uri
	});
	const logoURL = URL;
	const logourl = logoURL.createObjectURL(quotelogo.files[0]);
	let logoimg = new Image();
	logoimg.crossOrigin = 'anonymous';
	logoimg.setAttribute('crossOrigin', 'anonymous');
	logoimg.src = logourl;
	logoimg.onload = () => {
		finaloc = scaleDownImage(logoimg, finalLogoSize);
		// finally draw the image
		ctx.drawImage(finaloc, right.value, 5, finaloc.width, finaloc.height);
	};

	document.querySelector('#remove').classList.add('remove');
	document.querySelector('#finalOutput').classList.add('show');
	// img.src = url;
};

// This is for change color
let colorWell;
const defaultColor = '#0000ff';

const defineColor = () => {
	colorWell = document.querySelector('#colorWell');
	colorWell.value = defaultColor;
	colorWell.addEventListener('input', updateFirst, false);
	colorWell.addEventListener('change', updateAll, false);
	colorWell.addEventListener('change', () => generateFinal(), false);
	colorWell.select();
};

window.addEventListener('load', defineColor, false);
document.querySelector('#increase').addEventListener('click', () => generateFinal());
document.querySelector('#decrease').addEventListener('click', () => generateFinal());
document.querySelector('#generatecard').addEventListener('click', () => generateFinal());

downloadBtn.addEventListener('click', () => {
	const fileExtension = fileName.slice(-4); // -> obtain la extension
	// initialize the new name of the file
	let newFileName;

	if (fileExtension === '.jpg' || fileExtension === '.png' || fileExtension == '.svg') {
		newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
	}

	newFileName = 'imgCont.jpg';
	download(canvas, newFileName);
});
console.log(ctx);
