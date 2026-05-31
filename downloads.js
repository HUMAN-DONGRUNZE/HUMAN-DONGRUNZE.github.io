const downloads = [
    {
        name: "windowsdesktop-runtime-8.0.7-win-x64",
        extension: "zip",
        suffix: "ikmvS3nhz5aj",
        password: "1234",
        type: "lanzou"
    },
    {
        name: "UniGetUI.Installer",
        extension: "exe",
        suffix: "iJkvs3nhz3if",
        password: "1234",
        type: "lanzou"
    },
    {
        name: "OpenSCAD",
        extension: "exe",
        filename: "OpenSCAD-2021.01-x86-64-Installer.exe",
        password: "",
        type: "local"
    },
    {
        name: "ProPlus2021Retail",
        extension: "img",
        filename: "ProPlus2021Retail.img",
        type: "local"
    },
    {
        name: "MonitorIsland",
        extension: "cipx",
        filename: "MonitorIsland.cipx",
        password: "",
        type: "local"
    },
    {
        name: "ink.lipoly.ext.extraisland",
        extension: "cipx",
        filename: "ink.lipoly.ext.extraisland.cipx",
        password: "",
        type: "local"
    },
    {
        name: "SystemTools",
        extension: "cipx",
        filename: "SystemTools.cipx",
        password: "",
        type: "local"
    },
    {
        name: "GrantUiAccess",
        extension: "cipx",
        filename: "GrantUiAccess.cipx",
        password: "",
        type: "local"
    },
    {
        name: "StartUpAsAdmin",
        extension: "cipx",
        filename: "StartUpAsAdmin.cipx",
        password: "",
        type: "local"
    },
    {
        name: "Astrum For Online Classroom 4.6.0",
        extension: "exe",
        filename: "Astrum For Online Classroom 4.6.0.exe",
        password: "",
        type: "local"
    },
    {
        name: "PPT",
        extension: "pptx",
        filename: "ppt.pptx",
        password: "",
        type: "local"
    },
    {
        name: "SeewoStart-Installer",
        extension: "exe",
        filename: "SeewoStart-Installer.exe",
        password: "",
        type: "local"
    },
    {
        name: "sec",
        extension: "deb",
        filename: "sec.deb",
        password: "",
        type: "local"
    },
    {
        name: "files",
        extension: "zip",
        filename: "files.zip",
        password: "",
        type: "local"
    }
];

const fileTypeIcons = {
    // 压缩包
    zip: "zip.svg",
    rar: "rar.svg",
    "7z": "zip.svg",
    tar: "zip.svg",
    gz: "zip.svg",
    bz2: "zip.svg",
    // 可执行文件
    exe: "exe.svg",
    msi: "exe.svg",
    apk: "exe.svg",
    // 文档
    pdf: "pdf.svg",
    doc: "doc.svg",
    docx: "doc.svg",
    txt: "txt.svg",
    // 表格
    xls: "xls.svg",
    xlsx: "xls.svg",
    csv: "xls.svg",
    // 演示
    ppt: "ppt.svg",
    pptx: "ppt.svg",
    // 图片
    jpg: "image.svg",
    jpeg: "image.svg",
    png: "image.svg",
    gif: "image.svg",
    webp: "image.svg",
    bmp: "image.svg",
    // 视频
    mp4: "mp4.svg",
    avi: "mp4.svg",
    mov: "mp4.svg",
    wmv: "mp4.svg",
    mkv: "mp4.svg",
    // 音频
    mp3: "mp3.svg",
    wav: "mp3.svg",
    ogg: "mp3.svg",
    flac: "mp3.svg",
    // 其他
    iso: "img.svg",
    img: "img.svg",
    dmg: "img.svg",
};

function getFileTypeIcon(extension) {
    if (!extension) return "zip.svg";
    return fileTypeIcons[extension.toLowerCase()] || "zip.svg";
}

function getDownloadLink(item) {
    if (item.type === "local") {
        return `/downloads/${item.filename || `${item.name}.${item.extension}`}`;
    } else {
        return `https://wwbuz.lanzout.com/${item.suffix}`;
    }
}

function renderDownloadList() {
    const container = document.getElementById('download-list');
    if (!container) return;

    container.innerHTML = downloads.map((item, index) => {
        const fullName = item.extension ? `${item.name}.${item.extension}` : item.name;
        const iconFile = getFileTypeIcon(item.extension);
        const link = getDownloadLink(item);
        const isLocal = item.type === "local";
        return `
            <li class="download-item">
                <a href="${link}" ${!isLocal ? 'target="_blank"' : ''} class="download-link">
                    <span class="download-icon">
                        <img src="/assets/${iconFile}" alt="${item.extension}" width="30" height="30">
                    </span>
                    <div class="download-info">
                        <span class="download-name">${fullName}</span>
                        ${item.password ? `<span class="download-password">密码: ${item.password}</span>` : ''}
                    </div>
                    <span class="download-arrow">→</span>
                </a>
            </li>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', renderDownloadList);