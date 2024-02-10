//<![CDATA[
// Formulir whatsapp by wendy code
// Tombol Buka Tutup
$(".form-close").click(function(){
  $(".wendy-form-wa").fadeOut("fast")}
);$(".show-form").click(function(){
  $(".wendy-form-wa").fadeIn("slow")});
 
// validasi Untuk Kolom Wajib Isi
$('.wendy-input-field .validate').each(function() {
    title = $(this).attr('name');
    label = $(this).parents('.wendy-input-field');
    $('<span class="wendy-validasi"><b>' + title + '</b> diperlukan</span>').appendTo(label);
});
   $(document).on('keyup', '.wendy-input-field .validate', function() {
    if ($(this).val() != '') {
        $(this).removeClass('focus');
        $(this).parents('.wendy-input-field').find('.wendy-validasi').removeClass('show');
    }
});
$(document).on('change', '.wendy-input-field select', function() {
    $(this).removeClass('focus');
    $(this).parents('.wendy-input-field').find('.wendy-validasi').removeClass('show');
});
$('.send_form').click(whatsappchat);
function whatsappchat() { 
if ($('#wa_nama').val() == '') { // validasi Nama Lengkap
          $('#wa_nama').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_nama').focus();
        return false;
    } else if ($('#wa_email').val() == '') { // validasi Alamat Email
          $('#wa_email').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_email').focus();
        return false;
    } else if ($('#wa_blog').val() == '') { // validasi Nama Blog
          $('#wa_blog').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_blog').focus();
        return false;
      } else if ($('#wa_url').val() == '') { // wendy-validasi Url Blog
          $('#wa_url').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_url').focus();
        return false;
      } else if ($('#wa_lisensi').val() == 'default') { // validasi Lisensi
          $('#wa_lisensi').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_lisensi').focus();
        return false;
        } else if ($('#wa_pembayaran').val() == 'default') { // validasi Pembayaran
          $('#wa_pembayaran').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_pembayaran').focus();
        return false;
    } else {

/* Pengaturan Whatsapp */ 
var walink = 'https://web.whatsapp.com/send', 
    phone = '6281312345678', // No Whatsapp Kalian
    walink2 = 'Halo saya ingin membeli template anda dengan keterangan berikut:'; // Pesan Pembuka
 
/* Dukungan Smartphone */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
}  
 
 /* Formulir Input Panggilan */ 
var input_nama = $("#wa_nama").val(),
    input_email = $("#wa_email").val(),
    input_namaBlog = $("#wa_blog").val(), 
    input_urlBlog = $("#wa_url").val(),  
    input_lisensi = $("#wa_lisensi :selected").text(),
    input_pembayaran = $("#wa_pembayaran :selected").text(),
    input_namaproduk = $("#nama_produk").text(),
    input_viaUrl = location.href;

/* URL Final Whatsapp */ 
var wendy_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 
    '*DATA SAYA* %0A' +
    '=============================%0A' +
    '*Nama* : ' + input_nama + '%0A' + 
    '*Email* : ' + input_email + '%0A' +
    '*Nama Blog* : ' + input_namaBlog + '%0A' +
    '*Url Blog* : ' + input_urlBlog + '%0A' +
    '*Metode Pembayaran* : ' + input_pembayaran + '%0A' +
    '=============================%0A' + '%0A' + 
    '*DAFTAR BELANJAAN* %0A' +
    '=============================%0A' +
    '*Nama Template* : ' + input_namaproduk + '%0A' + 
    '*Jenis Lisensi* : ' + input_lisensi + '%0A' + 
    '*Link Template* : ' + input_viaUrl + '%0A' + 
    '=============================%0A';
 
/* Buka Jendela Whatsapp  */ 
window.open(wendy_whatsapp,'_blank');
window.location.href = input_viaUrl;
return false;
  }
};
//]]>
