window.addEventListener('load', () => {
  let rate = window.pageYOffset * 0.25

  const handleScroll = () => {
    rate = window.pageYOffset * 0.25
    //document.querySelector('.hero__image').style.transform = 'translate3D(0px, '+rate+'px , 0px)';

    document.querySelector('.hero__image').style.transform = `translate3d(${
      rate - rate - rate
    }px, 0px, 0px)`

    document.querySelector(
      '.hero__scrolltext'
    ).style.transform = `translate3d(0px, ${rate * 2}px, 0px)`
  }

  let pObs = new IntersectionObserver((e) => {
    if (e[0].isIntersecting) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  pObs.observe(document.querySelector('.hero'))



  const SplitMe = document.querySelectorAll('.topic h2')

  SplitMe.forEach((el) => {
    let myText = el.innerHTML.split(' ')
    let myTextSplit = []

    myText.forEach((item, i) => {
      myTextSplit.push(
        `<span class="animword" style="animation-delay: ${
          i * 0.0325 + 0.1
        }s; animation-duration: ${
          splitName.join('').length * 0.0325 * 0.75
        }s">${`${item} `}</span>`
      )
    })

    el.innerHTML = myTextSplit.join('')
  })

  let h2ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
      } else {
        entry.target.classList.remove('animated')
      }
    })
  })

  SplitMe.forEach((item) => {
    h2ob.observe(item)
  })

  /*
ANIMATE WHEN IN VIEW
Example: Give an element [data-anim="fade-in"] to add the fade-in class when in view.
*/

  let animStyle = 'fade-in'

  let animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animStyle = entry.target.getAttribute('data-anim')

      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
        entry.target.classList.add(animStyle)
      } else {
        animStyle = entry.target.getAttribute('data-anim')
        entry.target.classList.remove('animated')
        entry.target.classList.remove(animStyle)
      }
    })
  })
  document.querySelectorAll('[data-anim]').forEach((animTarget) => {
    animObserver.observe(animTarget)
  })

  let topicNum = 0

  document.querySelectorAll('.topic').forEach((item, i) => {
    i % 2 == 0
      ? item.classList.add('topic--even')
      : item.classList.add('topic--odd')
  })

  let topicLists = document.querySelectorAll('.topic ul')

  topicLists.forEach((topicList) => {
    topicList.querySelectorAll('li').forEach((topicListItem, i) => {
      topicListItem.style.animationDelay = `${i * 0.05}s`
      topicListItem.style.transitionDelay = `${i * 0.05}s`
    })
  })

  let topicObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fullview')
      } else {
        entry.target.classList.remove('fullview')
      }
    })
  }, {threshold: [1]})

  document.querySelectorAll('.topic').forEach((animTarget) => {
    topicObserver.observe(animTarget)
  })

  document.querySelectorAll('.example').forEach((example) => {
    example.addEventListener('click', (item) => {
      example.classList.toggle('active')
    })
  })

  document.querySelector('.mnav-toggle').addEventListener('click', () => {
	document.querySelectorAll('.mnav').forEach(function(item) {
	item.classList.toggle('active');
	})
})

/*
TOP OF SITE OBSERVER
Add/remove a class based on the top of the site being in view.
Requires an element with the class "top-pixel" at the top of the site.
*/

let topObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('header.header').classList.remove('has-shadow')
    } else {
      document.querySelector('header.header').classList.add('has-shadow')
    }
  })
})

document.querySelectorAll('.top-pixel').forEach((theTop) => {
  topObserver.observe(theTop)
})

const alert = document.querySelector('.alert')

document.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', (t) => {
    t.preventDefault()
    alert.classList.add('active')
    setTimeout(alertPop, 3000)
  })
})

const alertPop = () => {
  alert.classList.remove('active')
}

})
