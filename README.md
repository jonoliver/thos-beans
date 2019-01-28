## thos Beans

Let the world know that you;re thinking about [thos Beans](https://knowyourmeme.com/memes/im-thinking-about-thos-beans) with a [toasty](https://www.youtube.com/watch?v=QpN1220dTZk) easter egg.

[Try it out.](https://jonoliver.github.io/thos-beans)

## Installation

```
npm install thos-beans
```

## Usage

Import as a module:

```
  import thoseBeans from 'thos-beans';
  // initialize thos beans
  const beans = thosBeans();
  // trigger thos beans
  beans.trigger();
```

Or include as a script:
```
  <script src="thosBeans.js"></script>
  <script>
    const beans = window.thosBeans.default();
    // trigger thos beans
    beans.trigger();
  </script>
```

Initializing thosBeans appends an `img` and `audio` tag to the document `body`:
```
const beans = thoseBeans()
```

This returns an object with the following methods:

```
// display the image and play the audio
beans.trigger()
```

```
// attach even listeners to trigger on a key combination
beans.triggerOnKeyCombo()
```

```
// specify a key combination by passing the keys as an array
// defaults to ["Control", "b"]
beans.triggerOnKeyCombo(["Control", "b"])
```

Additionally, the `img` and `audio` object are exposed for direct manipulation. For example:

```
// changing the image source
beans.img.src = 'your-cool-picture.jpg';

// two images are included
// default image: the OG Legumaniac
beans.img.src = beans.images.billFoster;

// secondary image: some cheap imposter
beans.img.src = beans.images.billImposter;
```

```
// changing the audio source
beans.audio.src = 'your-cool-audio.mp3';
```
