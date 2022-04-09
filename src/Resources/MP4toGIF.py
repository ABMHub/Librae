"""
Script para converter todos os mp4 da pasta atual para gifs
Coloque todos os mp4 em uma pasta chamada "mp4"
Os gifs serao todos gerados na pasta "gifs"
"""

from PIL import Image
import glob
import cv2
import os
import shutil

def getFileName(path):
  return path.split("\\")[1].split(".")[0]

def makedir(folder):
  try: os.mkdir(folder)
  except FileExistsError: pass

def convert_mp4_to_jpgs(path):
  file_name = getFileName(path)
  video_capture = cv2.VideoCapture(path)
  still_reading, image = video_capture.read()
  frame_count = 0
  makedir("temp")
  makedir(f"temp/{file_name}")
  while still_reading:
      cv2.imwrite(f"temp/{file_name}/frame_{frame_count:03d}.jpg", image)
      
      # read next image
      still_reading, image = video_capture.read()
      frame_count += 1

def make_gif(frame_folder, file_name):
  images = glob.glob(f"{frame_folder}/*.jpg")
  images.sort()
  frames = [Image.open(image) for image in images]
  frame_one = frames[0]
  makedir("gifs")
  frame_one.save("gifs/" + file_name, format="GIF", append_images=frames,
                  save_all=True, duration=50, loop=0)

FOLDER_PATH = dir_path = os.path.dirname(os.path.realpath(__file__))
os.chdir(FOLDER_PATH)
videos = glob.glob("mp4/*.mp4")
videos.sort()

[convert_mp4_to_jpgs(video) for video in videos]
[make_gif("temp/" + getFileName(video), getFileName(video) + ".gif") for video in videos]
shutil.rmtree('temp', ignore_errors=True)