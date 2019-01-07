/** THIS IS FOR MAKINF THE LOGO VERY SHORT AND ADAPTABLE**/
const scaleDownImage = (targetImg, destImg) => {
	let reps = Math.floor(Math.log2(targetImg.width / destImg.width));
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
			oc.width = prevoc.width * 0.5;
			oc.height = prevoc.height * 0.5;
			octx.drawImage(prevoc, 0, 0, oc.width, oc.height);
		}
		i === reps - 1 ? (finaloc = oc) : (prevoc = oc);
	}

	const foc = document.createElement('canvas');
	const foctx = foc.getContext('2d');
	foc.width = destImg.width;
	foc.height = destImg.height;
	foctx.drawImage(finaloc, 0, 0, foc.width, foc.height);

	return foc;
};
/** THIS IS FOR INCREASE THE SIZE OF DESCRIPTION */
const increaseFontSize = (increaseFactor) => {
	const txt = document.getElementById('cardtext');
	const style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	const currentSize = parseFloat(style);
	txt.style.fontSize = currentSize + increaseFactor + 'px';
};
/* THIS IS FOR INCREASE THE IMAGE-LOGO */

const increaseFontImage = (increaseFactor) => {
	const txt = document.getElementById('cardtext');
	const style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	const currentSize = parseFloat(style);
	txt.style.fontSize = currentSize + increaseFactor + 'px';
};

const download = (data, filename) => {
	let e;
	const link = document.createElement('a');
	link.download = filename;
	link.href = data.toDataURL('image/jpeg', 1);

	e = new MouseEvent('click');
	link.dispatchEvent(e);
	console.log(link);
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
