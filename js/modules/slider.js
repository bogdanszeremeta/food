function slider({ container, slides, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
    // slider

    const slide = document.querySelectorAll(slides),
        slider = document.querySelector(container),
        sliderPrev = document.querySelector(prevArrow),
        sliderNext = document.querySelector(nextArrow),
        currentNumber = document.querySelector(currentCounter),
        totalNumber = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        sliderWidth = window.getComputedStyle(slidesWrapper).width;


    let sliderIndex = 1,
        offset = 0;



    slidesField.style.width = 100 * slide.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    if (slide.length > 10) {
        totalNumber.textContent = `${slide.length}`;
        currentNumber.textContent = `${sliderIndex}`;
    } else {
        totalNumber.textContent = `0${slide.length}`;
        currentNumber.textContent = `0${sliderIndex}`;
    }

    slide.forEach(slide => {
        slide.style.width = sliderWidth;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    // dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);


    for (let i = 0; i < slide.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);
        // dots.push(dot);

        if (i === 0) {
            dot.style.opacity = 1;
        }
    }
    const dots = document.querySelectorAll('.dot');

    function currentZeroLength() {
        if (sliderIndex < 10) {
            currentNumber.textContent = `0${sliderIndex}`;
        } else {
            currentNumber.textContent = `${sliderIndex}`;
        }
    }

    function deletNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    sliderNext.addEventListener('click', () => {
        if (offset == deletNotDigits(sliderWidth) * (slide.length - 1))
        // (+sliderWidth.slice(0, sliderWidth.length - 2) * (slide.length - 1))) 
        {
            offset = 0;
        } else {
            offset += deletNotDigits(sliderWidth);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (sliderIndex == slide.length) {
            sliderIndex = 1;
        } else {
            sliderIndex++;
        }

        currentZeroLength();

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[sliderIndex - 1].style.opacity = 1;

    });

    function dotsOpacity(dots) {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[sliderIndex - 1].style.opacity = 1;
    }

    sliderPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deletNotDigits(sliderWidth) * (slide.length - 1);
        } else {
            offset -= deletNotDigits(sliderWidth);
        }

        slidesField.style.transform = `translateX(${-offset}px)`;

        if (sliderIndex == 1) {
            sliderIndex = slide.length;
        } else {
            sliderIndex--;
        }

        currentZeroLength();
        dotsOpacity(dots);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            sliderIndex = slideTo;
            offset = deletNotDigits(sliderWidth) * (sliderIndex - 1);
            slidesField.style.transform = `translateX(${-offset}px)`;

            currentZeroLength();
            dotsOpacity(dots);

        });
    });
    // function hideSlide() {
    //     slide.forEach((img) => {
    //         img.classList.add('hide');
    //     });
    // }

    // if (slide.length < 10) {
    //     totalNumber.textContent = `0${slide.length}`;
    // } else {
    //     totalNumber.textContent = `${slide.lenght}`;
    // }

    // function showSlide(sliderIndex) {
    //     if (sliderIndex > slide.length) {
    //         sliderIndex = 1;
    //     }

    //     if (sliderIndex < 1) {
    //         sliderIndex = slide.length;
    //     }

    //     hideSlide();
    //     slide[sliderIndex - 1].classList.add('show');
    //     slide[sliderIndex - 1].classList.remove('hide');

    //     if (slide.length < 10) {
    //         currentNumber.textContent = `0${sliderIndex}`;
    //     } else {
    //         currentNumber.textContent = `${sliderIndex}`;
    //     }

    // }

    // function plusSlide(n) {
    //     showSlide(sliderIndex += n);
    // }

    // sliderPrev.addEventListener('click', () => {
    //     plusSlide(-1);

    // });

    // sliderNext.addEventListener('click', () => {
    //     plusSlide(+1);
    // });

    // showSlide(sliderIndex);3
}

export default slider;