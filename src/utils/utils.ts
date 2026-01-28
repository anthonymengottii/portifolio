import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

type Language = 'pt' | 'en';

// MODIFICADO: Agora busca pastas em vez de arquivos .mdx
function getMDXFolders(dir: string) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    console.warn(`Diretório de projetos não encontrado ou inválido: ${dir}`);
    return []; // Retorna vazio → home continua carregando
  }

  return fs.readdirSync(dir).filter((item) => {
    const itemPath = path.join(dir, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    
    // Ignorar pastas que não são projetos (evita erro em pt/ e en/)
    if (item === 'pt' || item === 'en' || item.startsWith('.') || item === 'drafts' || item.startsWith('_')) {
      return false;
    }
    
    return isDir;
  });
}

// MODIFICADO: Recebe idioma como parâmetro
function readMDXFile(filePath: string, language: Language = 'pt') {
  let finalPath = filePath;
  
  if (fs.statSync(filePath).isDirectory()) {
    const mdxFilePath = path.join(filePath, `${language}.mdx`);
    
    if (fs.existsSync(mdxFilePath)) {
      finalPath = mdxFilePath;
    } else {
      finalPath = path.join(filePath, 'pt.mdx'); // fallback
    }
  }

  if (!fs.existsSync(finalPath)) {
    console.warn(`Arquivo MDX não encontrado: ${finalPath} (pasta: ${filePath}) → pulando projeto`);
    return {
      metadata: {
        title: "Projeto sem conteúdo",
        publishedAt: new Date().toISOString().split('T')[0],
        summary: "Descrição pendente",
        images: [],
        team: [],
      } as Metadata,
      content: '',
    };
  }

  const rawContent = fs.readFileSync(finalPath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "Sem título",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
    summary: data.summary || "Sem resumo",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || "",
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

// MODIFICADO: Recebe idioma como parâmetro
function getMDXData(dir: string, language: Language = 'pt') {
  const mdxFolders = getMDXFolders(dir);
  
  return mdxFolders.map((folder) => {
    const folderPath = path.join(dir, folder);
    const { metadata, content } = readMDXFile(folderPath, language);
    const slug = folder;

    return {
      metadata,
      slug,
      content,
    };
  });
}

// MODIFICADO: Aceita idioma como segundo parâmetro
export function getPosts(customPath = ["", "", "", ""], language: Language = 'pt') {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir, language);
}

// Função para buscar um post específico por slug e idioma
export function getPostBySlug(
  customPath: string[], 
  slug: string, 
  language: Language = 'pt'
) {
  const postsDir = path.join(process.cwd(), ...customPath);
  const folderPath = path.join(postsDir, slug);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Pasta do post não encontrada: ${folderPath}`);
    return {
      metadata: {
        title: "Post não encontrado",
        publishedAt: new Date().toISOString().split('T')[0],
        summary: "",
        images: [],
        team: [],
      } as Metadata,
      slug,
      content: '',
    };
  }

  const { metadata, content } = readMDXFile(folderPath, language);

  return {
    metadata,
    slug,
    content,
  };
}