"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[9849],{9848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(4848),i=t(8453);const r={},s="Generating Manifest Files",o={id:"modders/manifest-files/generate-manifest-files",title:"Generating Manifest Files",description:"Some useful scripts for generating manifest files for use in https://github.com/M3-org/characterstudio. YMMV.",source:"@site/docs/modders/manifest-files/generate-manifest-files.md",sourceDirName:"modders/manifest-files",slug:"/modders/manifest-files/generate-manifest-files",permalink:"/characterstudio-docs/docs/modders/manifest-files/generate-manifest-files",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/modders/manifest-files/generate-manifest-files.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Character Traits",permalink:"/characterstudio-docs/docs/modders/manifest-files/character-traits"},next:{title:"VRM to LoRA data",permalink:"/characterstudio-docs/docs/modders/manifest-files/vrm-to-lora"}},l={},c=[{value:"Adding Your Own Traits",id:"adding-your-own-traits",level:2},{value:"Based on Existing NFT Collection",id:"based-on-existing-nft-collection",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"generating-manifest-files",children:"Generating Manifest Files"}),"\n",(0,a.jsxs)(n.p,{children:["Some useful scripts for generating manifest files for use in ",(0,a.jsx)(n.a,{href:"https://github.com/M3-org/characterstudio",children:"https://github.com/M3-org/characterstudio"}),". YMMV."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"adding-your-own-traits",children:"Adding Your Own Traits"}),"\n",(0,a.jsx)(n.p,{children:"This is for the typical usecase of creating your own avatar builder with your traits, like you see on the left side of the screenshot below."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: You'll need to generate your own screenshots. I recommend ",(0,a.jsx)(n.a,{href:"https://github.com/Shopify/screenshot-glb",children:"screenshot-glb"})," which works with VRM files as well and keep the base filenames same as the VRM files."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://hackmd.io/_uploads/BkMdoF-2T.jpg",alt:"Screenshot from 2024-02-19 21-15-46"})}),"\n",(0,a.jsxs)(n.p,{children:["You will need to modify the paths for the templates, it's currently configured for ",(0,a.jsx)(n.a,{href:"https://github.com/m3-org/loot-assets",children:"https://github.com/m3-org/loot-assets"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Here is how the folder structure looks before generating manifest.json"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://hackmd.io/_uploads/HyonISbnT.png",alt:"image"})}),"\n",(0,a.jsxs)(n.p,{children:["This is the script I'm using for generating a manifest for ",(0,a.jsx)(n.a,{href:"https://github.com/m3-org/loot-assets",children:"https://github.com/m3-org/loot-assets"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python!",children:'import os\nimport json\n\ndef generate_manifest(directory_path):\n    manifest_template = {\n        "assetsLocation": "./loot/",\n        "format": "vrm",\n        "traitsDirectory": "./loot/models/",\n        "thumbnailsDirectory": "./loot/models/",\n        "exportScale": 1,\n        "animationPath": get_animation_paths(),\n        "traitIconsDirectorySvg": "./loot/icons/",\n        "defaultCullingLayer": -1,\n        "defaultCullingDistance": [0.1, 0.01],\n        "initialTraits": ["Body", "Head", "Hand", "Foot", "Chest", "Waist", "Neck"], \n        "offset": [0.0, 0.48, 0.0],\n        "traits": generate_traits(directory_path),\n        "textureCollections": [],\n        "colorCollections": []\n    }\n\n    return json.dumps(manifest_template, indent=2)\n\ndef get_animation_paths():\n    animation_directory = "./animations"\n    animation_paths = [os.path.join(animation_directory, file) for file in os.listdir(animation_directory) if file.endswith(".fbx")]\n    return sorted(animation_paths)\n\n\ndef generate_traits(directory_path):\n    traits = []\n\n    trait_culling_layers = {\n        "Body": 0,\n        "Head": -1,\n        "Hand": -1,\n        "Foot": -1,\n        "Chest": 0,\n        "Neck": -1,\n        "Waist": -1\n    }\n\n    for trait_name, culling_layer in trait_culling_layers.items():\n        trait = {\n            "trait": trait_name,\n            "name": trait_name.capitalize(),\n            "icon": "",\n            "type": "mesh",\n            "iconGradient": "",\n            "iconSvg": f"{trait_name.upper()}.svg",\n            "cullingLayer": culling_layer,\n            "cameraTarget": {"distance": 3.0, "height": 0.8},\n            "cullingDistance": [0.1, 0.01],\n            "collection": generate_collection(directory_path, trait_name)\n        }\n\n        traits.append(trait)\n\n    return traits\n\ndef generate_collection(directory_path, trait_name):\n    trait_directory_path = os.path.join(directory_path, trait_name)\n\n    return [\n        {\n            "id": entry[:-4],\n            "name": entry[:-4].replace("_", " "),\n            "directory": f"{trait_name}/{entry}",\n            "thumbnail": f"{trait_name}/{entry[:-4]}.png"\n        }\n        for entry in os.listdir(trait_directory_path)\n        if entry.endswith(".vrm")\n    ]\n\nif __name__ == "__main__":\n    directory_path = "./models/"\n    manifest_content = generate_manifest(directory_path)\n\n    with open("./models/manifest.json", "w") as manifest_file:\n        manifest_file.write(manifest_content)\n\n    print("Manifest file generated successfully.")\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"This is how to run it"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"python3 scripts/generate_manifest.py"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"based-on-existing-nft-collection",children:"Based on Existing NFT Collection"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Handling Messy NFT Metadata"})}),"\n",(0,a.jsx)(n.p,{children:"Oftentimes metadata traits in NFT collections will contain a bunch of special characters and may not always match 1:1 with the visual trait. In these cases you will want a higher abstraction level system if you want to do things like to match the original metadata filenames to renamed versions you're using when handling the actual assets."}),"\n",(0,a.jsx)(n.p,{children:"First, we create a schema on how we go about renaming from the NFT metadata traits to a machine readable version with a CSV file containing every unique trait per row. For Anata project it looks like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csv!",children:"Body,trait_type,Category,Original,Rename\nFeminine,Brace,BRACE,Abstract Vision Brace,Abstract_Vision_Brace\nFeminine,Brace,BRACE,Arrow Brace Blue,Arrow_Brace_Blue\nFeminine,Brace,BRACE,Arrow Brace Fallen Angel,Arrow_Brace_Fallen_Angel\nFeminine,Brace,BRACE,Arrow Brace Green,Arrow_Brace_Green\nFeminine,Brace,BRACE,Arrow Brace Holy,Arrow_Brace_Holy\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We include the body and category because we needed to rename the ",(0,a.jsx)(n.code,{children:"trait_type"})," values too since some contained special characters and also because there were occasions where the same trait value showed up in different categories. We save this file as master_renamed_f"]}),"\n",(0,a.jsx)(n.p,{children:"Then with this script we generate a manifest file per NFT ID, using the JSON of the original metadata + the CSV file containing original and renamed values as arguments like so:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python!",children:'import argparse\nimport csv\nimport json\nimport os\n\n# Define the culling layer mapping\n# -1 = always show\n# 0 = usually body / skin\n# 1 = will cull with 0 (so usually clothing)\n# 2 = will cull with 0 and 1 (so usually hair)\n# etc..\nculling_layer_mapping = {\n    "Body": 0,\n    "Brace": 0,\n    "Clips and Kanzashi": -1,\n    "Clothing": 1,\n    "Earring": -1,\n    "Face Other": -1,\n    "Glasses": -1,\n    "Hair": 1,\n    "Hair Accessory Other": -1,\n    "Halos": -1,\n    "Hats": -1,\n    "Head": -1,\n    "Head Accessory Other": -1,\n    "Masks": -1,\n    "Neck": -1,\n    "Ribbons and Bows": -1,\n    "Sigil": -1,\n    "Tail": -1,\n    "Weapon": -1,\n    "Weapon Brace": -1,\n    "Wings": -1\n}\n\ndef read_csv_mapping(csv_file_path):\n    id_mapping = {}\n\n    with open(csv_file_path, \'r\') as csvfile:\n        csv_reader = csv.DictReader(csvfile)\n        for row in csv_reader:\n            original_name = row[\'Original\']\n            renamed_name = row[\'Rename\']\n\n            id_mapping[original_name] = renamed_name\n\n    return id_mapping\n\ndef get_animation_paths(directory_path):\n    animation_directory = os.path.join(directory_path, "_animations")\n    animation_paths = [os.path.join("./anata-vrm/_animations", file) for file in os.listdir(animation_directory) if file.endswith(".fbx")]\n    return sorted(animation_paths)\n\n\ndef get_id_from_mapping(trait_name, id_mapping):\n    # Get the original name directly using trait_name\n    renamed_name = id_mapping.get(trait_name, None)\n\n    return renamed_name if renamed_name is not None else trait_name\n\ndef create_manifest(input_file, csv_file, id_mapping):\n    """\n    Generate a *_manifest.json file based on a given *_attributes.json file and a CSV file.\n\n    Args:\n        input_file (str): The input JSON file (*_attributes.json).\n        csv_file (str): The input CSV file.\n\n    This script takes an input JSON file (*_attributes.json) and a CSV file and generates a corresponding\n    *_manifest.json file with specific formatting. It maps trait types to culling layers\n    based on the culling_layer_mapping and creates the manifest accordingly.\n    """\n\n    with open(input_file, \'r\') as f:\n        data = json.load(f)\n\n    with open(csv_file, \'r\') as csv_file:\n        csv_reader = csv.DictReader(csv_file)\n        name_mapping = {row[\'Original\']: row[\'Rename\'] for row in csv_reader}\n\n    folder_name = data["name"]\n    output_file = f"{folder_name}_manifest.json"\n\n    # Define the template for the manifest\n    manifest = {\n        "thumbnail": f"./anata-vrm/_thumbnails/t_{folder_name}.jpg",\n        "format": "vrm",\n        "traitsDirectory": f"./anata-vrm/male/",\n        "thumbnailsDirectory": f"./anata-vrm/male/",\n        "exportScale": 0.7,\n        "animationPath": get_animation_paths(directory_path),\n        "traitIconsDirectorySvg": "./assets/_icons/",\n        "requiredTraits": ["Body"],\n        "defaultCullingLayer": -1,\n        "defaultCullingDistance": [0.3, 0.3],\n        "offset": [0, 0.48, 0],\n        "initialTraits": ["Body", "Hair", "Clothing", "Head", "Face Other", "Clips and Kanzashi", "Neck", "Masks", "Glasses", "Hats", "Head Accessory Other", "Hair Accessory Other", "Ribbons and Bows", "Earring", "Wings", "Halos", "Tail"],\n        "traits": [],\n        "textureCollections": []\n    }\n\n    for attribute in data["attributes"]:\n        trait_type = attribute["trait_type"]\n        trait_value = attribute["value"]\n        original_name = attribute.get("Original")  # Get the "Original" name from the attribute\n        renamed_name = attribute.get("Rename")\n\n        # Use the original name if available in the CSV mapping, otherwise use the trait_value\n        display_name = name_mapping.get(original_name, trait_value)\n\n        trait_entry = {\n            "trait": trait_type,\n            "name": trait_type.capitalize(),\n            "icon": "",\n            "type": "mesh",\n            "iconGradient": "",\n            "iconSvg": f"{trait_type.upper()}.svg",\n            "cullingLayer": culling_layer_mapping.get(trait_type, -1),\n            "cameraTarget": {"distance": 5, "height": 1.2},\n            "cullingDistance": [0.03, 0.03] if trait_type =="Body" else [0.3, 0.3],\n            "collection": [\n                {\n                    "id": trait_value,\n                    "name": trait_value,\n                    "directory": "BODY/male.vrm" if trait_type == "Body" else f"{folder_name}/{get_id_from_mapping(renamed_name or trait_value, id_mapping)}.vrm",\n                    "thumbnail": "BODY/male.png" if trait_type == "Body" else f"{folder_name}/thumbnails/{get_id_from_mapping(renamed_name or trait_value, id_mapping)}.png",\n                    "textureCollection": "Body Skin" if trait_type == "Body" else ""\n                }\n            ]\n        }\n\n        manifest["traits"].append(trait_entry)\n\n    # Append textureCollections for "BODY" trait\n    body_collection = {\n        "trait": "Body Skin",\n        "collection": [\n            {\n                "id": f"skin_{folder_name}",\n                "name": f"Eyes {folder_name}",\n                "directory": f"{folder_name}/skin_{folder_name}.png",\n                "thumbnail": f"{folder_name}/skin_{folder_name}.png"\n            }\n        ]\n    }\n    manifest["textureCollections"].append(body_collection)\n\n    with open(output_file, \'w\') as output:\n        json.dump(manifest, output, indent=2)\n\nif __name__ == \'__main__\':\n    directory_path = "/home/jin/repo/anata-vrm/"\n    parser = argparse.ArgumentParser(description="Generate *_manifest.json file from *_attributes.json files")\n    parser.add_argument("input_file", help="Input JSON file (*_attributes.json)")\n    parser.add_argument("csv_file", help="Input CSV file with name mapping")\n    args = parser.parse_args()\n    id_mapping = read_csv_mapping(args.csv_file)\n\n    create_manifest(args.input_file, args.csv_file, id_mapping)  # Include id_mapping argument\n'})}),"\n",(0,a.jsx)(n.p,{children:"Can run on a folder containing JSON files from the chain like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'for i in *.json; do python3 generate_manifest.py "$i" master_renamed_filenames.csv; done'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);