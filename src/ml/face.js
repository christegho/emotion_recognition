import * as faceapi from 'face-api.js'

const MODEL_PATH =
  `${process.env.PUBLIC_URL}/static/models/face/` +
  'mtcnn_model-weights_manifest.json'

const MODEL_PATH_2 =
  `${process.env.PUBLIC_URL}/static/models/face/` +
  'tiny_face_detector_model-weights_manifest.json'

const MODEL_PATH_3 =
  `${process.env.PUBLIC_URL}/static/models/face/`


const PARAMS = {
//   minFaceSize: 30,
//   scaleFactor: 0.709,
//   maxNumScales: 10,
//   scoreThresholds: [0.5, 0.5, 0.5],
  scoreThreshold: 0.4,
  inputSize: 256,
}

export class FaceFinder {
  constructor(path = MODEL_PATH, params = PARAMS, path_2 = MODEL_PATH_2, path_3 = MODEL_PATH_3) {
    this.path = path
    this.path_2 = path_2
    this.path_3 = path_3
    this.params = params
  }

  async load() {
//     this.model = new faceapi.Mtcnn()
//     await this.model.load(this.path)
//     this.model = new faceapi.TinyFaceDetector()
//     await this.model.load(this.path_2)
    await faceapi.loadTinyFaceDetectorModel(this.path_3)
      console.log(faceapi.nets)
  }

  async findFaces(img) {
    const input = await faceapi.toNetInput(img, false, true)
    console.log(faceapi.nets)
//     const results = await this.model.forward(input, 128)
//     const detections = await this.model.locateFaces(input, this.params)
//     const detections = results.map(r => r.faceDetection)
    const detections = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions(this.params))
//     const detections = results.map(r => r.faceDetection)
    return { input, detections }
  }

  async findAndExtractFaces(img) {
    const { input, detections } = await this.findFaces(img)
    console.log(detections)
    const faces = await faceapi.extractFaces(input, detections)

    return { detections, faces }
  }
}
