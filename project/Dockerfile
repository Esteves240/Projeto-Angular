#imagem base
FROM node:20-alpine AS build

# diretoria do trabalho(onde correm os scripts -> RUN)
WORKDIR /app


#copiar ficheiros para a imagem
COPY package*json ./
RUN npm ci

COPY . .
RUN npm run

#corre npm intall && intala packages (enquanto faz build)
RUN npm install

#expor porta
EXPOSE 4200

#comandos a correr no fim do build
CMD ["sh"]