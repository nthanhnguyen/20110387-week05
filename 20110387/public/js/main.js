// Thêm comment vào bài viết
$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const comment = $(this).find('input[name="comment"]').val();
        const postId = $(this).attr('action').split('/').pop();

        $.ajax({
            url: `/blog/post/${postId}`,
            method: 'POST',
            data: { comment },
            success: function (data) {
                // Cập nhật giao diện để hiển thị comment mới
                const commentList = $(e.target).siblings('ul');
                commentList.append(`<li>${comment}</li>`);
                // Xóa nội dung trong input
                $(e.target).find('input[name="comment"]').val('');
            },
        });
    });

    // Xác nhận trước khi xóa bài viết
    $('.delete-button').on('click', function () {
        return confirm('Are you sure you want to delete this post?');
    });
});
