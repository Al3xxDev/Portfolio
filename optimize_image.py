from PIL import Image
import os

src_path = "/home/administrator/workspace/personal/Portfolio/assets/ProfessionalPFP.JPEG"
dst_path = "/home/administrator/workspace/personal/Portfolio/public/assets/ProfessionalPFP.JPEG"

img = Image.open(src_path)
if img.mode != 'RGB':
    img = img.convert('RGB')

img.thumbnail((1000, 1000), Image.Resampling.LANCZOS)
img.save(dst_path, "JPEG", quality=85, optimize=True)

print("Original size:", os.path.getsize(src_path), "bytes")
print("Optimized size:", os.path.getsize(dst_path), "bytes")
