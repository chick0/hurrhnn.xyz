from os.path import join
from glob import glob
from zipfile import ZipFile
from zipfile import ZIP_DEFLATED


def get_files() -> list:
    return [
        x for x in glob(join(".", "dist", "**"), recursive=True)
    ]


def main():
    files = get_files()
    print("total files:", len(files))

    with ZipFile(
        file="dist.zip",
        mode="w",
        compression=ZIP_DEFLATED,
        compresslevel=9
    ) as zip:
        for file in files:
            name = file.replace(join(".", "dist", ""), "")
            if len(name) != 0:
                print(" +", name), zip.write(file, name)


if __name__ == "__main__":
    print()
    main()
