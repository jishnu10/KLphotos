import os
import json

# Path to the images directory
images_dir = 'images'

# List all files in the images directory
image_files = [f for f in os.listdir(images_dir) if os.path.isfile(os.path.join(images_dir, f))]

# Create the dictionary for JSON
images_dict = {"images": image_files}

# Write the dictionary to images.json in the root directory
with open('images.json', 'w') as json_file:
    json.dump(images_dict, json_file, indent=4)

print("images.json has been generated successfully.")
