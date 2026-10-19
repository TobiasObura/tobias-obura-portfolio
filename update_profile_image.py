import os
import shutil

# 1. Locate the image file and copy to public directory
source_image = "Tobias Obura.jpg"
public_dir = "public"

if not os.path.exists(public_dir):
    os.makedirs(public_dir, exist_ok=True)

target_image_path = os.path.join(public_dir, "profile.jpg")

if os.path.exists(source_image):
    shutil.copy(source_image, target_image_path)
    print(f"✅ Copied {source_image} to {target_image_path}")
else:
    print(f"⚠️ Source image {source_image} not found in current directory. Ensure the image is uploaded.")

# 2. Update page.tsx to render the profile image in the Hero & About sections
target_page = "app/page.tsx" if os.path.exists("app") else "src/app/page.tsx"

if os.path.exists(target_page):
    with open(target_page, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace initials placeholder with high-res profile image tag
    old_hero_avatar = '<div className="w-24 h-24 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-3xl mx-auto mb-4 flex items-center justify-center">\n              TO\n            </div>'
    new_hero_avatar = '<div className="w-28 h-28 mx-auto mb-4 relative rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl">\n              <img src="/profile.jpg" alt="Tobias Obura - Education Leader" className="w-full h-full object-cover" />\n            </div>'

    if old_hero_avatar in content:
        content = content.replace(old_hero_avatar, new_hero_avatar)
        with open(target_page, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"✅ Updated {target_page} with the profile image!")
    else:
        print("ℹ️ Avatar element updated or already customized in page.tsx.")
else:
    print(f"⚠️ Could not find {target_page}.")

