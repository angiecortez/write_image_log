const downloadBtn = document.querySelector('#saveBtn');
const cardtext = document.querySelector('#cardtext');
const cardtext1 = document.querySelector('#cardtext1');
const cardtext2 = document.querySelector('#cardtext2');
const cardtext3 = document.querySelector('#cardtext3');

const quotetypography = document.getElementById('quotetypography');
const sizes = document.querySelector('.sizes');
const canvas = document.getElementById('canvas');
const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
console.log('width: ', canvas.width, 'height: ', canvas.height);
const ctx = canvas.getContext('2d');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');

let img = new Image();
// img.crossOrigin = 'anonymous';
// img.setAttribute('crossOrigin', 'anonymous');

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
	// img.crossOrigin = 'anonymous';
	// img.setAttribute('crossOrigin', 'anonymous');

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
	const finalCardSize1 = { width: 400, height: 200 };
	const finalCardSize2 = { width: 820, height: 312 };
	const finalCardSize3 = { width: 1200, height: 1200 };
	const finalLogoSize = { width: x.value, height: y.value };
	const finalLogoSize2 = { width: 100, height: 80 };
	const finalLogoSize3 = { width: 250, height: 140 };
	// const finalLogoSize3 = { width: 100, height: 100 };
	// overwrite the description
	cardtext.innerHTML = document.querySelector('input[name=quotetext]').value;
	cardtext1.innerHTML = document.querySelector('input[name=quotetext]').value;
	cardtext2.innerHTML = document.querySelector('input[name=quotetext]').value;
	cardtext3.innerHTML = document.querySelector('input[name=quotetext]').value;

	const htmlcanvas = document.getElementById('htmlcanvas');
	const htmlcanvas1 = document.getElementById('htmlcanvas1');
	const htmlcanvas2 = document.getElementById('htmlcanvas2');
	const htmlcanvas3 = document.getElementById('htmlcanvas3');
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

	const data1 =
		'<svg xmlns="http://www.w3.org/2000/svg" width="' +
		finalCardSize1.width +
		'" height="' +
		finalCardSize1.height +
		'">' +
		'<foreignObject width="100%" height="100%">' +
		htmlcanvas1.innerHTML +
		'</foreignObject>' +
		'</svg>';
	const data2 =
		'<svg xmlns="http://www.w3.org/2000/svg" width="' +
		finalCardSize2.width +
		'" height="' +
		finalCardSize2.height +
		'">' +
		'<foreignObject width="100%" height="100%">' +
		htmlcanvas2.innerHTML +
		'</foreignObject>' +
		'</svg>';

	const data3 =
		'<svg xmlns="http://www.w3.org/2000/svg" width="' +
		finalCardSize3.width +
		'" height="' +
		finalCardSize3.height +
		'">' +
		'<foreignObject width="100%" height="100%">' +
		htmlcanvas3.innerHTML +
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
		// sizes of logo
		finaloc = scaleDownImage(logoimg, finalLogoSize);
		// finally draw the image
		ctx.drawImage(finaloc, right.value, 5, finaloc.width, finaloc.height);
	};

	drawInlineSVG(ctx1, data1, () => {
		// console.log(canvas.toDataURL('image/jpeg')); // -> PNG data-uri
	});
	const logoURL1 = URL;
	const logourl1 = logoURL1.createObjectURL(quotelogo.files[0]);
	let logoimg1 = new Image();
	// logoimg1.crossOrigin = 'anonymous';
	// logoimg1.setAttribute('crossOrigin', 'anonymous');
	logoimg1.src = logourl1;

	logoimg1.onload = () => {
		finaloc = scaleDownImage(logoimg1, finalLogoSize);
		// finally draw the image
		ctx1.drawImage(finaloc, 320, 5, finaloc.width, finaloc.height);
		console.log('finaloc', finaloc, 'finaloc.height', finaloc.height);
	};

	drawInlineSVG(ctx2, data2, () => {
		// console.log(canvas.toDataURL('image/jpeg')); // -> PNG data-uri
	});
	const logoURL2 = URL;
	const logourl2 = logoURL2.createObjectURL(quotelogo.files[0]);
	let logoimg2 = new Image();
	// logoimg2.crossOrigin = 'anonymous';
	// logoimg2.setAttribute('crossOrigin', 'anonymous');
	logoimg2.src = logourl2;

	logoimg2.onload = () => {
		finaloc = scaleDownImage(logoimg2, finalLogoSize2);
		// finally draw the image
		ctx2.drawImage(finaloc, 710, 5, finaloc.width, finaloc.height);
	};
	drawInlineSVG(ctx3, data3, () => {
		// console.log(canvas.toDataURL('image/jpeg')); // -> PNG data-uri
	});
	const logoURL3 = URL;
	const logourl3 = logoURL3.createObjectURL(quotelogo.files[0]);
	let logoimg3 = new Image();
	// logoimg2.crossOrigin = 'anonymous';
	// logoimg2.setAttribute('crossOrigin', 'anonymous');
	logoimg3.src = logourl3;

	logoimg3.onload = () => {
		finaloc = scaleDownImage(logoimg3, finalLogoSize3);
		console.log('logo3 ==>', finaloc);
		// finally draw the image
		ctx3.drawImage(finaloc, 920, 20, finaloc.width, finaloc.height);
	};
	// document.querySelector('#remove').classList.add('remove');
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
	download(canvas);
});
console.log(ctx, ctx1);
