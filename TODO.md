# TODO — rodrigosoria.eu

## Antes do release (publicar no SmarterASP)
- [ ] Subir por FTP tudo que mudou em 02/11/2026 (ver `git show --stat HEAD`), inclusive `web.config` novo e a pasta `counseling/` (no servidor já se chama assim; o repo chamava `counselling/`).
- [ ] Depois de subir: abrir https://www.rodrigosoria.eu/ e http://rodrigosoria.eu/ e confirmar o redirect 301 para https://rodrigosoria.eu/ — se der erro 500, apagar o `web.config` do servidor (módulo de rewrite ausente) e avisar.
- [ ] Testar o formulário de contato em EN e PT-BR (campo vazio deve ser barrado; envio deve cair em thankyou.html).

## Rodrigo
- [ ] **Certificações com nome da escola e ano** em `about.html` / `pt-br/about.html` (hoje só "Transpersonal Therapist", "Shamanic Practitioner", "Shamanic Counseling" sem emissor). O IPHM pede cópia dos certificados; o site deveria dizer quem emitiu.
- [ ] **E-mail de contato público** (ex. um endereço @rodrigosoria.eu) no rodapé e em `policies.html` — hoje só existe formulário, e o GDPR/consumidor pede um canal direto. Confirmar também qual remetente responde pela Formspree (thankyou.html diz "qualquer endereço de rodrigosoria.eu").
- [ ] **Formulário https://forms.gle/JaL7k44XT9VRkte58 ("SHS - Session Booking Form")**: estava no thankyou.html como "formulário prévio". Troquei pelo prévio oficial (Twfb6s3xZhP8K8kCA). Se o SHS ainda for usado, dizer onde entra.
- [ ] **Plantas do programa**: o site diz "sacred Amazonian plant medicine" sem nomear. Para IPHM e seguradora, nomear as plantas (cacau, rapé etc.) e confirmar que são legais na Irlanda; seguradora nenhuma cobre substância controlada.
- [ ] **Preço riscado do Sound Bath (€100 → €80)** desde pelo menos 10/2025: promoção permanente é preço enganoso (CCPC). Ou fixar €80, ou dar prazo à promoção.
- [ ] **Depoimento com nome completo (Josyene Silva)**: guardar o consentimento por escrito dela para uso no site.
- [ ] **Página de políticas** (`policies.html` / `pt-br/policies.html`): ler e ajustar o que não bate com a prática real — retenção 12 meses, reembolso pró-rata do programa, prazo de resposta a reclamações (7/28 dias), "associação profissional da qual faço parte" (trocar por IPHM quando acreditado).
- [ ] **"Trauma-informed"** (services/contact): ter o certificado do curso que sustenta a frase, ou tirar.
- [ ] Decidir se a página `calendar/` volta ao menu (link está comentado em contact.html; embed agora aponta para cal.com).
- [ ] Seguro: pedir cotação (ver nota do brain `Acreditação IPHM e Seguro`).

## Claude
- [ ] Depois do FTP: rodar de novo a comparação live × repo (`curl` + `cmp` por página) e o link check.
- [ ] Quando o Rodrigo tiver as certificações e o e-mail: colocar no about/policies/rodapé e, se acreditado, o selo IPHM com link do perfil.
