/** THIS IS FOR MAKINF THE LOGO VERY SHORT AND ADAPTABLE**/
const scaleDownImage = (targetImg, destImg) => {
	let reps = Math.floor(Math.log2(targetImg.width / destImg.width + 10));
	// create off-screen canvas to perform scaling down image
	let prevoc;
	let finaloc;
	for (let i = 0; i < reps; i++) {
		const oc = document.createElement('canvas');
		const octx = oc.getContext('2d');

		if (i == 0) {
			oc.width = targetImg.width * 0.5;
			oc.height = targetImg.height * 0.5;
			octx.drawImage(targetImg, 0, 0, oc.width, oc.height);
		} else {
			oc.width = prevoc.width * 3;
			oc.height = prevoc.height * 3;
			octx.drawImage(prevoc, 0, 0, oc.width, oc.height);
		}
		i === reps - 1 ? (finaloc = oc) : (prevoc = oc);
	}
	console.log('finaloc', finaloc);

	const foc = document.createElement('canvas');
	const foctx = foc.getContext('2d');
	foc.width = destImg.width;
	foc.height = destImg.height;
	foctx.drawImage(finaloc, 0, 0, foc.width, foc.height);
	return foc;
};
/** THIS IS FOR INCREASE THE SIZE OF DESCRIPTION */
const increaseFontSize = (increaseFactor) => {
	const txt = cardtext;
	const txt1 = cardtext1;
	const style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	const style1 = window.getComputedStyle(txt1, null).getPropertyValue('font-size');
	const currentSize = parseFloat(style);
	const currentSize1 = parseFloat(style1);
	txt.style.fontSize = currentSize + increaseFactor + 'px';
	txt1.style.fontSize = currentSize1 + increaseFactor + 'px';
};
/* THIS IS FOR INCREASE THE IMAGE-LOGO */

const increaseFontImage = (increaseFactor) => {
	const txt = document.querySelector('#cardtext');
	const style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	const currentSize = parseFloat(style);
	txt.style.fontSize = currentSize + increaseFactor + 'px';
};

// const download = (data, filename) => {
// 	let e;
// 	const link = document.createElement('a');
// 	link.download = filename;
// 	link.href = data.toDataURL('image/jpeg', 1);

// 	e = new MouseEvent('click');
// 	link.dispatchEvent(e);
// 	console.log(link);
// };
const download = (canvas) => {
	var link = document.createElement('a');
	link.href = canvas.toDataURL('image/jpeg');
	link.download = 'picture.png';
	link.style.display = 'none';
	document.body.appendChild(link);
	link.click();
	link.parentNode.removeChild(link);
};
const updateFirst = (e) => {
	const p = document.querySelector('p');
	p ? (p.style.color = e.target.value) : null;
};
const updateAll = (e) => {
	document.querySelectorAll('p').forEach((p) => {
		p.style.color = e.target.value;
	});
};
