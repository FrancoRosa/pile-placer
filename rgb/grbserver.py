from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from samplebase import SampleBase
from rgbmatrix import graphics
from colormap import colors
from time import sleep
from threading import Thread


app = Flask(__name__)
CORS(app)
PORT = 9998
piles = [
    {
        'distance': 1,
        'color': 'white'
    },
    {
        'distance': 2,
        'color': 'white'
    }
]

class RunText(SampleBase):
    def __init__(self, *args, **kwargs):
        super(RunText, self).__init__(*args, **kwargs)
        self.parser.add_argument("-t", "--text", help="The text to scroll on the RGB LED panel", default="Hello world!")

    

    def run(self):
        offscreen_canvas = self.matrix.CreateFrameCanvas()
        font = graphics.Font()
        font.LoadFont("fonts/7x13.bdf")
        font_big = graphics.Font()
        font_big.LoadFont("fonts/10x20.bdf")
        font_small = graphics.Font()
        font_small.LoadFont("fonts/4x6.bdf")
        pos = offscreen_canvas.width
        my_text = self.args.text

        def left_block(color, text, distance):
            graphics.DrawText(offscreen_canvas, font_small, 1, 30, colors[color], text)
            graphics.DrawText(offscreen_canvas, font_big, 1, 18, colors[color], "\u2593")
            graphics.DrawText(offscreen_canvas, font_big, 20 , 15, colors[color], str(distance)+'ft')
            graphics.DrawText(offscreen_canvas, font_small, 1, 6, colors['black'], 'next')
        
        def right_block(color, text, distance):
            graphics.DrawText(offscreen_canvas, font_small, 116, 30, colors[color], text)
            graphics.DrawText(offscreen_canvas, fontBig, 116, 18, colors[color], "\u2593")
            graphics.DrawText(offscreen_canvas, fontBig, 70 , 15, colors[color], str(distance)+'ft')
            graphics.DrawText(offscreen_canvas, font_small, 116, 6, colors['black'], 'next')


        speed = 0.25

        while True:
            
            offscreen_canvas = self.matrix.SwapOnVSync(offscreen_canvas)
            offscreen_canvas.Clear()
            left_block(piles[0]['color'], ' <<', piles[0]['distance'])
            right_block(piles[1]['color'], ' >>',piles[1]['distance'])
            sleep(speed)

            offscreen_canvas = self.matrix.SwapOnVSync(offscreen_canvas)
            offscreen_canvas.Clear()
            left_block(piles[0]['color'], '< <', piles[0]['distance'])
            right_block(piles[1]['color'], '> >', piles[1]['distance'])
            sleep(speed)

            offscreen_canvas = self.matrix.SwapOnVSync(offscreen_canvas)
            offscreen_canvas.Clear()
            left_block(piles[0]['color'], '<< ', piles[0]['distance'])
            right_block(piles[1]['color'], '>> ', piles[1]['distance'])
            sleep(speed)

@app.route('/')
def index():
    return "... source server running on port %s" % PORT


def server():
    app.run(debug=False, port=PORT, host='0.0.0.0')
    
Thread(target=server, args=[]).start()

while True:
    sleep(10)

# if __name__ == "__main__":
#     run_text = RunText()
#     if (not run_text.process()):
#         run_text.print_help()
